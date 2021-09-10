import {connectToDatabase} from '../../../utils/mongodb';


const createPupilData = async (_id) => {
    const {db} = await connectToDatabase();

    const result = await db.collection('details').insert({_id: _id, firstName:"", familyName: "", className:""})

    return result;
}

const getAllPupilData = async () => {
    const {db} = await connectToDatabase();

    const result = await db.collection('details').find().toArray()

    return result;
}

const getPupilData = async (_id) => {
    const {db} = await connectToDatabase();

    const result = await db.collection('details').findOne({_id})

    console.log(`Looking for ${_id}, found:`, result)

    return result;
} 

const handler = async (req, res) => {

    const {pupilId} = req.query;

    const result = await getPupilData(pupilId)
   
    res.status(200).json(result)
    
}

export default handler;
export {getAllPupilData, getPupilData, createPupilData};