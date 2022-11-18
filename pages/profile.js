import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../components/authConfig";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/navbar';

import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';

import {useState, useEffect} from 'react';
import levels, {getLevels, getTasks} from '../components/data/levels';
import { DateTime, DATETIME_SHORT } from "luxon";


export default function Profile() {
    
    const [showDraw, setShowDrawer] = useState (false);

    const { instance, accounts, inProgress } = useMsal();

    
    const account = useAccount(accounts[0] || {});
    const name = (account && account.name) || ""
    const email = (account && account.username.toLowerCase()) || ""

    const [profile, setProfile] = useState(null);
    const [progress, setProgress] = useState(null);

    const handleDrawerClick = () => {
        setShowDrawer(true);
      }
    
    const toggleDrawer = (state) => {
    setShowDrawer(state)
    }

    useEffect( async ()=> { 
        if (!email)
            return;

        
        const {data} = await axios.get(`/api/profile/${email}`)
        setProfile(data[0]);
        setProgress(data[1]);

    }, [email])


    const getTaskCount = () => getProgressDisplayData(getTasks(), progress).length
    const getTaskCompletedCount = () => getProgressDisplayData(getTasks(), progress).filter(t => t.progress === "100.0").length


    const getProgressDisplayData = (tasks, progress) => {
        const data = []

        if (!tasks || !progress){
            return []
        }

        tasks.forEach(t => {
            const progressForTask = progress.filter(p => p.challenge_name == t)
            

            if (progressForTask && progressForTask.length == 1){
                
                data.push({name: t, progress:progressForTask[0].latest.progress, created:progressForTask[0].latest.created})
            } else {
                
                data.push({name: t, progress:0, created:""})
            }
        });

        return data;
    }

    

    return (<>
        <UnauthenticatedTemplate>You must be logged on to see your profile.</UnauthenticatedTemplate>
        <AuthenticatedTemplate>
            <div className="container">
                <Head>
                    <title>Python Challenges</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar onClick={handleDrawerClick}></Navbar>
                <Drawer anchor="left" 
                        open={showDraw} 
                        onClose={() => toggleDrawer(false)}>
                    <div className="drawer-inner">Hello World</div>
                    {
                        
                    }
                </Drawer>
                
                {
                    <>
                        {name}({email})
                        <h2>You have completed {getTaskCompletedCount()} of {getTaskCount()} tasks ({((getTaskCompletedCount() / getTaskCount()) * 100).toFixed(2) }%)</h2>
                    </>
                }

            
                {
                    email && progress && <DisplayProgress email={email} displayData={getProgressDisplayData(getTasks(), progress)} tasks={getTasks()} progress={progress}/>
                }


            </div>
        </AuthenticatedTemplate>
        <style jsx>{`
            .container {
                margin-top: 90px;
            }

            .profile {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
        `}</style>
        </>
      )


}

const ErrorComponent = ({error}) => {
    return <div variant="h6">An Error Occurred: {error.errorCode}</div>;
}

const Loading = () => {
    return <div variant="h6">Authentication in progress...</div>
}

const DisplayProgress = ({tasks, email, displayData, progress}) => {

    
    return <>

        <h1>Displaying Progress</h1>
        
        {
            Object.keys(levels).map( k => ([
                <div className="levelTitle">{k}</div>,
                <div>{
                    levels[k].map((l, i) => (<DisplayProgressLevel key={`progress::${i}`} levelName={k} level={l} progress={progress}/>))
                }</div>
            ]
            ))
        }
        

       
        
        <style jsx>{`
        
            .levelTitle {
                font-weight: bold;
                font-size: 1.5rem;
                margin-top: 2rem;

            }

            .display {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        `}</style>
    </>
}

const DisplayProgressLevel = ({level, levelName, progress}) => {
    const getProgress = (p) => p && p.length > 0 ? JSON.stringify(p[0].latest.progress) : "" 
    const light = (l) =>  l === '"100.0"' ? 'green-light' : l
    return <>
            <div className="level">
            <Link href={`/levels/${levelName}/${level.title}`}>
                <div className="levelName">
                    {level.title}
                </div> 
            </Link>
            {level.tasks.map((t, i) => <div key={t} className={`task  ${light(getProgress(progress.filter(p => p.challenge_name == t)))} tooltip`}>
                <span className="tooltiptext">
                    {t}
                {}
                </span></div>)
            }
            </div>
            <style jsx>{`
                .green-light {
                    background-color: green;
                }

                .level {
                    display: flex;
                    flex-direction: row;
                    height: 2rem;
                }

                .levelName {
                    
                    width: 15rem;
                    cursor: pointer;
                }

                .levelName:hover {
                    color: red;
                    text-decoration: underline;
                }

                .task {
                    border: silver 1px solid; 
                    width: 1.75rem;
                    height: 1.75rem;
                    margin-right: 0.25rem;
                    border-radius: 50%;
                }

                /* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  
  
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
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
  width: 120px;
bottom: 100%;
left: 50%;
margin-left: -60px;
}
            
            `}</style>
          </>
}
    