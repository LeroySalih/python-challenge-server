import Head from 'next/head'
import Link from 'next/link';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { useMsalAuthentication } from "@azure/msal-react";


import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../components/authConfig";
import {useState} from 'react';




import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Navbar from '../components/navbar';

import Image from 'next/image'

const ErrorComponent = ({error}) => {
  return <div >An Error Occurred: {error.errorCode}</div>;
}

const Loading = () => {
  return <div >Authentication in progress...</div>
}




export default function Home() {
  
  const [showDraw, setShowDrawer] = useState (false);

  const [tabIndex, setTabIndex] = useState(0);
  
  
  // console.log(login, result, error);

  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const authRequest = {
    ...loginRequest
  };

  const handleTabClick = (index) => {
    setTabIndex(index);
  }

  const doLogIn  = () => {
    const {login, result, error} = useMsalAuthentication("popup");
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
    <>
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

      

      <main className="main">
        

        <div style={{width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "30px", display: "flex", flexDirection: "row"}}>
          <div>
            <h1>Learning Computing, Computer Science and ICT concepts</h1>
            <UnauthenticatedTemplate><Button variant="outlined">Log In</Button></UnauthenticatedTemplate>
            
          </div>
          <div>
              <Image
                src="/images/index-header.png"
                alt="Picture of the author"
                width={500}
                height={400}
              />
        </div>

        </div>
        
        {/* Topic Choser */}
        <div className="topic-grid">
          <div>
            <div><Button onClick={() => setTabIndex(0)}> Programming with Python</Button></div>
            <div><Button  onClick={() => setTabIndex(1)}> Building Web Pages</Button></div>
          </div>
          <div>
          {tabIndex == 0 && <div>
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
              <li><Link href="/level-2/input-validation">Input Validation</Link></li>
              <li>Counters</li>
            </ul>

            <ul>
              <li>Anatomy of a Web Page</li>
              <li>HTML Mark Up</li>
              <li>Block Elements</li>
              <li>Inline Elements</li>
            </ul>

            <ul>
              <li>Basic Selectors </li>
              <li>Styling with CSS</li>
              <li>Colours</li>
              <li>Fonts</li>
              <li></li>
              <li>Advanced Selectors</li>
            </ul>
            
          </div>
          
          <div className="level-title">Level 3 - Challenges</div>
          <div className="level-container">

            <ul>
              <li>Cheat at Maths</li>
              <li>Algebra Solver</li>
              <li>All about triangles</li>
            </ul>

            <ul>
              <li>Break the code</li>
              <li>Letter Counter</li>
              <li>Dictionary Searcher</li>
            </ul>

           

            <ul>
              
            </ul>
            
          </div>
        
          
        </div>
          }

          {tabIndex == 1 && <div>
            
          <div className="level-title">Level 1 - White Belt</div>  
          <div className="level-container">
            <ul>Layout
              <li>Anatomy of a Web Page</li>
              <li>Block markup</li>
              <li>Inline markup</li>
            </ul>

            <ul> Styling
              <li>Inline Styling</li>
              <li>RBG Colours</li>
              <li>Inline markup</li>
            </ul>
            <ul> Interaction
              <li>Interactive Styling</li>
              <li></li>
            </ul>
          </div>
          

          <div className="level-title">Level 2 - Green Belt</div>  
          <div className="level-container">
            <ul></ul>
            <ul></ul>
            <ul></ul>
          </div>

          <div className="level-title">Level 3 - Black Belt</div>  
          <div className="level-container">
            <ul></ul>
            <ul></ul>
            <ul></ul>
          </div>


        </div>
          }
          </div>
        </div>
        
        
        

      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        padding: 5rem 0;
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
