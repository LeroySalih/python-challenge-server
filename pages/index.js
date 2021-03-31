import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { useMsalAuthentication } from "@azure/msal-react";


import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../components/authConfig";
import {useState} from 'react';


import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Navbar from '../components/navbar';


const ErrorComponent = ({error}) => {
  return <div >An Error Occurred: {error.errorCode}</div>;
}

const Loading = () => {
  return <div >Authentication in progress...</div>
}




export default function Home() {
  
  const [showDraw, setShowDrawer] = useState (false);
  
  const {login, result, error} = useMsalAuthentication("popup");
  console.log(login, result, error);

  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const authRequest = {
    ...loginRequest
  };

  const doLogIn  = () => {
    login();
  }

  const doLogOut = () => {
    instance.logout()
  }

  const handleDrawerClick = () => {
    setShowDrawer(true);
  }

  const toggleDrawer = (state) => {
    setShowDrawer(state)
  }

  

  return (
    <div className={styles.container}>
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

      

      <main className={styles.main}>
        
        <Button variant="contained" color="primary" onClick={doLogIn}>Login</Button>
        <Button onClick={doLogOut}>Log Out</Button>
        <AuthenticatedTemplate>
            <Link href="/profile">Request Profile Information</Link>
            <pre>{JSON.stringify(account, null, 2)}</pre>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
            
              <center>Please sign-in to see your profile information.</center>
            </UnauthenticatedTemplate>
        
        <div>
          <div className="level-title">Level 1 - Learn the Language</div>
          <div className="level-container">

            <ul>
              <li>
                <Link href="/level-1/output">Output</Link>
                </li>
              <li>Operators - Numeric</li>
              <li>Operators - Strings</li>
              <li>Variables</li>
              <li>Data Types</li>
              <li>Input</li>
            </ul>

            <ul>
              <li>Operators - Boolean Equalities</li>
              <li>Operators - Boolean Logic</li>
              <li>Decisions</li>
              <li>Compound Decisions</li>
              
            </ul>

            <ul>
              <li>Loops - For</li>
              <li>Loops - While</li>
              <li>Defs & parameters</li>
              <li>Defs with Returns</li>
              <li>Lists</li>
              <li>Dictionaries</li>
            </ul>
            
          </div>
          
          <div className="level-title">Level 2 - Small Blocks</div>
          <div className="level-container">

            <ul>
              <li>Processing Lists</li>
              <li>Files - Create &amp; Write</li>
              <li>Files - Read &amp; Process</li>
              <li>Input Validation</li>
              <li>Counters</li>
            </ul>

            <ul>
              
            </ul>

            <ul>
              
            </ul>
            
          </div>
          
          <div className="level-title">Level 3 - Challenges</div>
          <div className="level-container">

            <ul>
              <li>Break the code</li>
              
            </ul>

            <ul>
              
              
            </ul>

            <ul>
              
            </ul>
            
          </div>
          
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        .level-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

        }

        .level-title {
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 2rem;
        }

        .drawer-inner {
          width: 250px;
        }

      `}</style>
    </div>
  )
}
