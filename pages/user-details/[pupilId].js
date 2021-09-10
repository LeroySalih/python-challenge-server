
import {getAllPupilData, getPupilData} from '../api/details/[pupilId]';
import {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'

const UserDetails = ({pupilId, firstName, familyName, className}) => {
    const [_firstName, setFirstName] = useState(firstName);
    const [_familyName, setFamilyName] = useState(familyName);
    const [_className, setClassName] = useState(className);
    const [_isDirty, setIsDirty ] = useState(false)
    
    const router = useRouter();

    useEffect(()=> {
        if (_isDirty){
            console.log("Changing Data on Server")
            axios.post('/api/details/save', {
                _id: pupilId, 
                firstName: _firstName, 
                familyName: _familyName, 
                className: _className
            })
            setIsDirty(false)
        }
        
    }, [_isDirty])

    return <div>
            <h1>User Details Page</h1>
            <div className="display-grid">
                <div>id:</div>
                <div>{pupilId}</div>
                <div>First Name:</div>
                <input className="input-field" value={_firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={()=> setIsDirty(true)}/>
                <div>Family Name:</div>                
                <input className="input-field" value={_familyName} onChange={(e) => setFamilyName(e.target.value)} onBlur={()=> setIsDirty(true)}/>
                <div>Class Name:</div>
                <input className="input-field"  value={_className} onChange={(e) => setClassName(e.target.value)} onBlur={()=> setIsDirty(true)}/>
                <div></div>
                <div><button className="input-button" onClick={()=> router.push('/levels')}>Continue</button></div>
            </div>
            <style jsx>{`

                .display-grid {
                    margin-top: 1rem;
                    display : grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1rem;
                    }

                .input-field {
                    padding: 0.5rem;
                    font-size: 1.4rem;
                    font-family: monospace;
                    border-radius: 0.5rem;
                    border: 1px solid black;
                }

                .input-button {
                    background-color: #ff00d4;
                    color: white;
                    padding: 0.5rem;
                    cursor: pointer;
                    font-size: 1.2rem;
                    font-family: monospace;
                    border-radius: 0.3rem;
                    border: 0.5px solid silver;
                    
                }

                .input-button::hover {
                    scale: 1.1;
                    box-shadow: #aaaaaa 0px 0px 10px;
                }
                `}
            </style>
            </div>
}

//get details for each pupil, and build the page using the UserDetails component
export async function getStaticProps(context) {

    const {pupilId} = context.params;

    const pupilDetails = await getPupilData(pupilId)
    

    return {
        props: {pupilId, ...pupilDetails}
    }
}

// list all pupils in db
export async function getStaticPaths () {

    const result = await getAllPupilData();

    const params = result.map(r => { return {params: {pupilId: r._id, data:r}}});

    return {
        paths: params,
        fallback: true
    }
}

export default UserDetails