console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_DB);

const {connectToDatabase} = require('./cli-mongo.js');
console.log(connectToDatabase)
XLSX = require('xlsx');

var workbook = XLSX.readFile('./utils/pupil-db.xlsx')
var sheet = workbook.Sheets["Sheet1"]

data = XLSX.utils.sheet_to_json(sheet)


const parseClasses = (data) => {
    const c = {};

    data.forEach(row => {
        const key = `${row['Academic Year']}::${row['Class']}`
        
        c[key] = {
            _id: key,
            class: row['Class'],
            teacher: row['Teacher'],
            subject: row['Subject'],
            subjectCode: row['Subject code'],
            members : []
        }
    })

    return c;
}

const parseClassMembers = (classes, data) => {
    
    data.forEach(row => {
        
        if (! classes[`${row[`Academic Year`]}::${row[`Class`]}`].members.includes(row['Email']))
        {
            classes[`${row[`Academic Year`]}::${row[`Class`]}`].members.push(row['Email'])
        }
        
    })

    return classes;
}

const parsePupils = (data) => {
    const p = {}

    data.forEach(row => {

        key = row['Email'];

        p[key] = {
            _id: key,
            email : row['Email'],
            name: row['Name'],
            upn: row['UPN'],
            parentEmails: [] 
        }
    })

    return p;
}

const parseParentEmails = (pupils, data) => {

    data.forEach(row => {
        row['Primary Email'] && pupils[row['Email']].parentEmails.push(row['Primary Email'])
    })

    return pupils;
}





const main = async () => {

    let classes = parseClasses(data);
    classes = parseClassMembers(classes, data);

    let pupils = parsePupils(data);
    pupils = parseParentEmails(pupils, data);

    const {db, client} = await connectToDatabase();

    let result = await db.collection('classes').insertMany(Object.values(classes));

    console.log(`Inserted ${result.insertedCount} classes`);

    result = await db.collection('pupils').insertMany(Object.values(pupils));

    console.log(`Inserted ${result.insertedCount} pupils`);

    client.close();

}

main();