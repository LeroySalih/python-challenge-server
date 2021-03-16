
import Db from 'mongodb/lib/db';
import {connectToDatabase} from '../../utils/mongodb';


export default function handler(req, res) {

  const {db} = await connectToDatabase()
  const {data} = req.query
  console.log(data);

  db.collections("subnmissions").insertOne(data);
  
  res.status(200).json({ name: 'Data Received' })
}