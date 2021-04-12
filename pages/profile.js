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

        console.log(`Getting details for ${email}`);
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
                
                <h1>Profile data for: {name}</h1>

                {profile && <div className="profile">
                                <div>UPN:</div>
                                <div>{profile.upn}</div> 
                                <div>Email:</div>
                                <div>{profile.email}</div> 
                            </div>
                }

                {
                    progress && <div>
                        
                        {
                            progress.map((p, i) => (<div key={i}>
                                <div>
                                    {p.challenge_name}
                                </div>
                                
                                <div>
                                    {p.latest.progress} %
                                </div>
                                
                                <div>
                                    {p.latest.created}
                                </div>
                            </div>))
                        }
                    </div>
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