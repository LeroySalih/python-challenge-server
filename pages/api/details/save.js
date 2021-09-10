
import {connectToDatabase} from '../../../utils/mongodb';

const handler = async (req, res) => {

    const {_id, firstName, familyName, className} = req.body

    console.log('Saving ', {_id, firstName, familyName, className})
    
    const {db} = await connectToDatabase()
    const result = await db.collection('details').updateOne({_id}, {$set: {firstName, familyName, className}});

    return res.status(200).json({msg: "Saved"});
}


export default handler;