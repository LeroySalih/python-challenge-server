

import {connectToDatabase} from '../../utils/mongodb';


const handler = async (req, res) => {

  const {db} = await connectToDatabase()
  
  const {email, challenge_name, repl_owner, repl_slug, successes, fails, progress, main} = req.body;
  const results = JSON.parse(req.body.results);
  const data = {
    email, 
    repl_owner, 
    repl_slug, 
    challenge_name, 
    results, 
    successes, 
    fails, 
    progress, 
    main}
  console.log(data);
  const result = await db.collection("submissions").insertOne({...data, created: new Date()});

  res.status(200).json({ inserted: `${result.insertedCount} records` })
}

export default handler;