import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { useMsalAuthentication } from "@azure/msal-react";


import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../components/authConfig";
import {useState, useEffect} from 'react';

import {AnimatePresence, motion} from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';




import axios from 'axios';
import Button from '@material-ui/core/Button';


import PupilProgressLink from '../components/format/pupil-progress-link';

import Image from 'next/image'
import CodePanelAnimation from '../components/code-panel';
import Data from '../components/data/levels';


const ErrorComponent = ({error}) => {
  return <div >An Error Occurred: {error.errorCode}</div>;
}

const Loading = () => {
  return <div >Authentication in progress...</div>
}





const HeroPanel = styled.div`
  height: calc(50vh - 80px);
  width:100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & .title-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
   
  }

  & .animation-panel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .title-block {
    
    font-family: 'Tourney';
    margin-left: 5rem;
    h1 {
      line-height : 2.3rem;
      font-size: 3rem;
    }

    h2 {
      line-height: 0.1rem;
    }

    h3 {
      font-family: 'Open Sans';
      font-size: 0.8rem;
    }
  }



  
`

export default function Home() {
  
  
  const [showTitle, setShowTitle] = useState(true);

  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState(null);
  const [pupilProgress, setPupilProgress] = useState(null);

  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const [hover, setHover] = useState(false)

  const router = useRouter();

  const handleClick = () => {
    
    //setShowTitle(prev => !prev)
    router.push('/levels')
  }

  useEffect(async () => {
    

    if (account) {
      setEmail(account.username.toLowerCase())
      const {data} = await axios.get(`/api/watch-pupil/${account.username.toLowerCase()}`)

      setPupilProgress(data);


    } else {
      setEmail(null);
      setPupilProgress(null);
    }
    

  }, [account])

  const authRequest = {
    ...loginRequest
  };

  return (
    <>
    <div className="container">

      <Head>
        <title>Python Steps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      


      <main className="main">
        

        <HeroPanel>
          <AnimatePresence exitBeforeEnter>
          {showTitle && <motion.div className="title-panel"
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}

            >
            <motion.div className="title-block">
            <h2>mr salih's</h2>
            <h1>Python Steps</h1>
            <h3>
              A collection of resources and challenges to help you learn programming in python.
            </h3>
            <h3>Click <b><u>Start Coding</u></b> to begin.</h3>
            </motion.div>
          </motion.div>
          }
          </AnimatePresence >
          <div className="animation-panel">
            <CodePanelAnimation hover={hover} setHover={setHover} onClick={handleClick} />
          </div>
        </HeroPanel>
        
       
        <div className="contents-container">
          {
            Object.keys(Data).map(k => <div key={k}>
              <h3>{k}</h3>
              <ul>
                {Data[k].map(t => <li key={t.title}><Link href={`/levels/${k}/${t.title}`}><span className="link">{t.title}</span></Link></li>)}
              </ul>
              </div>)
          }
         
        </div>
        
        
        
        

      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Server ID: {JSON.stringify(process.env.NEXT_PUBLIC_SERVER_ID)}</div>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
     
    </div>
    <style jsx>{`
      .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;

      }

      .link {
        cursor: pointer;

      }

      .link:hover {
        text-decoration : underline;
        color: red;
      }

      .contents-container {
        display: flex;
        justify-content: space-around;
        width: 80%;
      }

      .topic-grid {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 80%

      }

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

      .main {
       
        flex: 1;
        display: flex;
        flex-direction: column;
        
        align-items: center;
      }
      
      .footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .footer img {
        margin-left: 0.5rem;
      }
      
      .footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
      }
      
      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      
      .code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
          Bitstream Vera Sans Mono, Courier New, monospace;
      }
      
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px;
        margin-top: 3rem;
      }
      
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      
      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }
      
      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .logo {
        height: 1em;
      }
      
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    
    `}</style>
    </>
  )
}
