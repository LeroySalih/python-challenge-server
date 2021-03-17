import {connectToDatabase} from '../../../utils/mongodb';


export const getSubmissions = async () => {

  const {db} = await connectToDatabase();

  return await db.collection('submissions').find().toArray();

}

export const getSubmissionByReplName = async () => {
  const agg = [
    {
      '$sort': {
        'owner': 1, 
        'repl_name': 1, 
        'created': -1
      }
    }, {
      '$lookup': {
        'from': 'registers', 
        'localField': 'owner', 
        'foreignField': 'repl_owner', 
        'as': 'ownerDetails'
      }
    }, {
      '$project': {
        'owner': 1, 
        'repl_name': 1, 
        'results': 1, 
        'successes': 1, 
        'fails': 1, 
        'progress': 1, 
        'main': 1, 
        'created': 1, 
        'ownerDetails': {
          '$arrayElemAt': [
            '$ownerDetails', 0
          ]
        }
      }
    }, {
      '$group': {
        '_id': {
          'owner': '$owner', 
          'ownerDetails': '$ownerDetails', 
          'repl_name': '$repl_name'
        }, 
        'submissions': {
          '$push': {
            'ownerDetails': '$ownerDetails', 
            'created': '$created', 
            'results': '$results', 
            'main': '$main', 
            'successes': '$successes', 
            'fails': '$fails', 
            'progress': '$progress', 
            'created': '$created'
          }
        }
      }
    }, {
      '$group': {
        '_id': {
          'repl_name': '$_id.repl_name'
        }, 
        'owners': {
          '$push': {
            'owner': '$_id.owner', 
            'ownerDetails': '$_id.ownerDetails', 
            'submissions': '$submissions'
          }
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'replName': '$_id.repl_name', 
        'owners': '$owners'
      }
    }
  ];

  const {db} = await connectToDatabase()


  return await db.collection("submissions").aggregate(agg).toArray();

}

const handler = async (req, res) => {

  const result = await getSubmissionByReplName();
  
  res.status(200).json(result)
  
}


export default handler; 