import {connectToDatabase} from '../../../utils/mongodb';


export const getPupilProgress = async (email) => {

    const agg = [
        {
          '$match': {
            'email': email
          }
        }, {
          '$sort': {
            'created': -1
          }
        }, {
          '$group': {
            '_id': {
              'email': '$email', 
              'challenge_name': '$challenge_name', 
              'repl_slug': '$repl_slug', 
              'repl_owner': '$repl_owner'
            }, 
            'submissions': {
              '$push': {
                'created': '$created', 
                'progress': '$progress'
              }
            }
          }
        }
      ]

    const {db } = await connectToDatabase();

    const result = await db.collection('submissions').aggregate(agg).toArray();

    return result;
}


const handler = async (req, res) => {

    const {params} = req.query;
    const [email] = params;

    const result = await getPupilProgress(email);
    
    return res.json(result)
}


export default handler;