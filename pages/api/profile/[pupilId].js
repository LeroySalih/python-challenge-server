
import {connectToDatabase} from '../../../utils/mongodb';

const getPupilProgressById = async (pupilId) => {
    const agg = [
        {
          '$match': {
            'email': pupilId
          }
        }, {
          '$sort': {
            'created': -1, 
            'challenge_name': 1
          }
        }, {
          '$group': {
            '_id': {
              'email': '$email', 
              'challenge_name': '$challenge_name'
            }, 
            'submissions': {
              '$push': {
                'created': '$created', 
                'progress': '$progress', 
                'id': '$_id'
              }
            }
          }
        }, {
          '$project': {
            '_id': 0, 
            'email': '$_id.email', 
            'challenge_name': '$_id.challenge_name', 
            'latest': {
              '$arrayElemAt': [
                '$submissions', 0
              ]
            }
          }
        }
      ];

    const {db} = await connectToDatabase();

    const result = await db.collection('submissions').aggregate(agg).toArray();

    return result;
}

const getPupilProfileById = async (pupilId) => {
    
    const {db} = await connectToDatabase();

    const result = await db.collection('pupils').find({_id: pupilId}).toArray()

    return result[0] || null;
}


const handler = async (req, res) => {

    const {pupilId} = req.query;

    

    const result = await Promise.all([getPupilProfileById(pupilId), getPupilProgressById(pupilId)]);
   
    

    res.status(200).json(result)
    
}

export default handler;
