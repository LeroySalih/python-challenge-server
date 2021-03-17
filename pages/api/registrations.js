import {connectToDatabase} from '../../utils/mongodb';

export const getRegistrations = async () => {

  const {db} = await connectToDatabase();

  return await db.collection('registers').find().toArray();

}

const handler = async (req, res) => {

  
  const {firstName, familyName, repl_owner} = req.body;

  const result = await getRegistrations();
  
  res.status(200).json(result)
  
}


export default handler;