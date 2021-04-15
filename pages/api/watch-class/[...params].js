import {connectToDatabase} from '../../../utils/mongodb';


export const getClassSubmissions = async (classId, challengeName) => {

    const agg = [
        {
          '$match': {
            'email': {
              '$ne': null
            }
          }
        }, {
          '$lookup': {
            'from': 'pupils', 
            'localField': 'email', 
            'foreignField': 'email', 
            'as': 'pupilDetails'
          }
        }, {
          '$lookup': {
            'from': 'classes', 
            'localField': 'email', 
            'foreignField': 'members', 
            'as': 'classes'
          }
        }, {
          '$match': {
            'challenge_name': challengeName, 
            'classes.0.class': classId
          }
        }, {
          '$sort': {
            'email': 1, 
            'created': -1
          }
        }, {
          '$group': {
            '_id': {
              'email': '$email', 
              'details': {
                '$arrayElemAt': [
                  '$pupilDetails', 0
                ]
              }
            }, 
            'submissions': {
              '$push': {
                'progress': '$progress', 
                'created': '$created', 
                'main': '$main'
              }
            }
          }
        }
      ]

    const {db} = await connectToDatabase();
    const result = await db.collection('submissions').aggregate(agg).toArray();

    return result;
} 


export const getClass = async (classId) => {
  const {db} = await connectToDatabase();
  const result = (await db.collection('classes').find({class: classId.replace("::", "/")}).toArray())[0];

  return result;
}

const handler = async (req, res) => {

    const {params} = req.query;
    const [classId, challengeId] = params;
    

    const result = await Promise.all([
        getClass(classId),
        getClassSubmissions(classId.replace("::", "/"), challengeId)
        
    ]);

    const [classData, submissions] = result;

    console.log({classData, submissions})
    res.status(200).json({classData, submissions});
}

export default handler;
