

import {connectToDatabase} from '../../utils/mongodb';


const handler = async (req, res) => {

  const {db} = await connectToDatabase()
  
  
  const {owner, repl_name, successes, fails, progress, main} = req.body;
  const results = JSON.parse(req.body.results);

  
  const data = {owner, repl_name, results, successes, fails, progress, main}
  
  const result = await db.collection("submissions").insertOne(data);

  console.log( `${result.insertedCount} records` );

  res.status(200).json({ inserted: `${result.insertedCount} records` })
}

export default handler;