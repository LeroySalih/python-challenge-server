import {connectToDatabase} from '../../utils/mongodb';


const handler = async (req, res) => {

  const {db} = await connectToDatabase();

  const {firstName, familyName, repl_owner} = req.body;

  console.log(firstName, familyName, repl_owner)

  const result = await db.collection('registers').insertOne({firstName, familyName, repl_owner, created: new Date()});

  
  res.status(200).json({msg:"OK", inserted: result.inserted})
  
}


export default handler;