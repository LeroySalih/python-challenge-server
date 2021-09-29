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
import getLevels, {getTasks} from '../components/data/levels';
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
                </Drawer>
                
            
                {
                    email && progress && <DisplayProgress tasks={getTasks(email)} progress={progress}/>
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

const DisplayProgress = ({tasks, progress}) => {

    const getProgress = (tasks, progress) => {
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
    
    return <>

        <h1>Displaying Progress</h1>
        <div className="display">
         {
            tasks && 
            progress && 
            getProgress(tasks, progress).map(p => (
                [<div>{p.name}</div>,
                <div>{p.progress}</div>,
                <div>{p.created && p.created.length && DateTime.fromISO(p.created).toLocaleString(DATETIME_SHORT)}</div>
                ]
            ))
            }
        </div> 
        <style jsx>{`
        
            .display {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        `}</style>
    </>
}