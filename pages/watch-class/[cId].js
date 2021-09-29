import {useState, useEffect} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'

import axios from 'axios';
import { DateTime } from 'luxon';

const Component = () => {
    
    const router = useRouter();
    const {cId} = router.query;

    const [lastUpdate, setLastUpdate] = useState(null)
    const [currentClass, setCurrentClass] = useState(cId);
    const [progressData, setProgressData] = useState(null);
    const [tasks, setTasks] = useState(null);

    useEffect (()=>{
        setCurrentClass(cId)
    }, [cId]);

    useEffect(async ()=> {
        
        const {data} = await axios.get(`/api/watch-class/${currentClass}`);
        const {tasks, returnData} = data;
        setProgressData(returnData);
        setTasks(tasks);
        
    }, [lastUpdate, currentClass])

    const getClassName = (progress) => {
        return progress == 100.0 ? "green" : "grey"
    }

    return (
        <div className="page">
            <div className="page-title">Watch Class ({currentClass})</div>
            <div>

                <Button onClick={()=> {setLastUpdate(DateTime.now())}}>Refresh</Button>
                <div>{lastUpdate && lastUpdate.toISO()}</div>
                
                <div className="progress-grid">
                    {progressData && Object.keys(progressData).map(pd => [
                        <div>{pd}</div>,
                        
                            tasks && tasks.map(t => (<div 
                                tooltip={t}
                                className={`
                                    tooltip
                                    ${getClassName((progressData[pd][t] && progressData[pd][t].progress) || 0)}
                                    `} ><span className="tooltiptext">{t}</span></div>))
                        
                    ])}
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
                    grid-template-columns: repeat(${tasks && (tasks.length + 1)}, 1fr);
                    grid-row-gap: 10px;
                    width: 80%;
                }

                .green {
                    background-color: rgba(100, 150, 100, 0.5);
                    margin: 0.1rem;
                    border-radius: 0.5rem;
                    padding: 0.1rem;
                }

                .grey {
                    background-color: rgba(150, 150, 150, 0.3);
                    margin: 0.1rem;
                    border-radius: 0.5rem;
                    padding: 0.1rem;
                }

                .progress-grid div {
                    border-bottom: dashed 1px silver;
                }

                /* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
            `}</style>
        </div>
    )
}


export default Component