import {useState, useEffect} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import { DateTime } from 'luxon';

const Component = () => {
    
    const [lastUpdate, setLastUpdate] = useState(null)
    const [currentClass, setCurrentClass] = useState("10CS::Cs");
    const [currentChallenge, setCurrentChallenge] = useState("level-1::output");
    const [progressData, setProgressData] = useState(null);


    useEffect(async ()=> {
        console.log("Refreshing Data")
        const {data} = await axios.get(`/api/watch-class/${currentClass}/${currentChallenge}`);
        setProgressData(data);
        console.log(data);
    }, [currentClass, currentChallenge, lastUpdate])



    const getProgress = (m) => {
        const submissions = progressData.submissions.filter(s => s._id.email == m);

        const progress = (submissions && submissions[0] && submissions[0].submissions[0].progress) || "No Data"
        const name = (submissions && submissions[0] && submissions[0]._id.details.name) || ""

        return {name, progress}

    }
        



    return (
        <div className="page">
            <div className="page-title">Watch Class</div>
            <div>
                <Select value={currentClass} onChange={(e) => setCurrentClass(e.target.value)}>
                    <MenuItem value={"10CS::Cs"}>10CS/Cs</MenuItem>
                    <MenuItem value={"11CS::Cs"}>11CS/Cs</MenuItem>
                </Select>


                <Select value={currentChallenge} onChange={(e) => setCurrentChallenge(e.target.value)}>
                    <MenuItem value={"level-1::output"}>Level 1 - Output</MenuItem>
                    <MenuItem value={"level-1::decisions-2"}>Level 1 - Decisions 2</MenuItem>
                    <MenuItem value={"level-1::decisions-3"}>Level 1 - Decisions 3</MenuItem>
                    <MenuItem value={"level-2::input-validation"}>Level 2 - Input Validation</MenuItem>
                    <MenuItem value={"level-3::letter-count"}>Level 3 - Letter Count</MenuItem>
                    <MenuItem value={"level-3::transpose"}>Level 3 - Transpose</MenuItem>
                </Select>
                <Button onClick={()=> {setLastUpdate(DateTime.now())}}>Refresh</Button>
                <div>{lastUpdate && lastUpdate.toISO()}</div>
                
                <div className="progress-grid">
                    {progressData && progressData.classData.members.map((m, i) => {return [
                        <div key={i}>{m}</div>,
                        <div>{getProgress(m).name}</div>,
                        <div>{getProgress(m).progress}</div>]})
                    }
                </div>
            </div>

            <style jsx>{`

                .page {
                    width: 80%;
                    margin: auto;
                }
                .page-title {
                    margin-top: 1.3rem;
                    margin-bottom: 1.3rem;
                    font-size: 4rem;
                    font-family: 'Roboto Condensed'
                }

                .progress-grid {
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 100px;
                    grid-row-gap: 10px;
                    width: 80%;
                }

                .progress-grid div {
                    border-bottom: dashed 1px silver;
                }
            `}</style>
        </div>
    )
}


export default Component