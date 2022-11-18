import {connectToDatabase} from '../../../utils/mongodb';

import { getTasks } from '../../../components/data/levels';

export const getClassSubmissions = async (classId, from, to) => {

    from = from == undefined ? '2020-01-01' : from
    to = to == undefined ? '2099-12-31' : to 

    const agg = [
      {
        '$match': {
          'email': {
            '$ne': null
          }, 
          'created': {
            '$gte': new Date(from), 
            '$lt': new Date(to)
          }
        }
      }, {
        '$lookup': {
          'from': 'details', 
          'localField': 'email', 
          'foreignField': '_id', 
          'as': 'details'
        }
      }, {
        '$match': {
          'details': {
            '$size': 1
          }
        }
      }, {
        '$match': {
          'details': {
            '$elemMatch': {
              'className': classId
            }
          }
        }
      }, {
        '$sort': {
          'email': 1, 
          'created': 1
        }
      }, {
        '$group': {
          '_id': {
            'email': '$email', 
            'details': {
              '$arrayElemAt': [
                '$details', 0
              ]
            }
          }, 
          'submissions': {
            '$push': {
              'challenge_name': '$challenge_name', 
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


export const getClasses = async (classId) => {

  const agg = [
    {
      '$group': {
        '_id': '$className', 
        'count': {
          '$sum': 1
        }
      }
    }
  ]

  const {db} = await connectToDatabase();
  const result = await db.collection('details').aggregate(agg).toArray();

  return result;
}

const handler = async (req, res) => {

    const {from, to, section, params} = req.query;
    const [classId, challengeId] = params;
    
    console.log()
    const result = await Promise.all([
        getClasses(),
        
        getClassSubmissions(classId, from, to)
        
    ]);

    const [classData, submissions] = result;

    const returnData = {}

    const tasksObject = getTasks(section).reduce((a, v) => ({...a, [v]: {}}), {})

    
    submissions.forEach(s => {

      //check if this is a new record
      if (returnData[s['_id']['email']] == undefined){
        returnData[s['_id']['email']] = Object.assign({}, tasksObject);
      }

      
      s.submissions.forEach(ss => {
        returnData[s['_id']['email']][ss['challenge_name']] = ss;
      })
      
      
    })
    

    
    res.status(200).json({returnData, tasks: getTasks(section)});
}

export default handler;
