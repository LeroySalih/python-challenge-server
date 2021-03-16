export default function handler(req, res) {

  const {data} = req.query
  console.log(data);
  
  res.status(200).json({ name: 'Data Received' })
}