import {connectToDatabase} from '../../utils/mongodb';


const handler = async (req, res) => {

  const {db} = await connectToDatabase();

  const {firstName, familyName, repl_owner} = req.body;

  console.log(firstName, familyName, repl_owner)

  const result = await db.collection('resgisters').find().toArray();

  res.status(200).json(result)
  
}


export default handler;