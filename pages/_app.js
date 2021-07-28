import '../styles/globals.css'

import {useState} from 'react';
import { MsalProvider } from "@azure/msal-react";
import { UserAgentApplication, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../components/authConfig";
import styled, {createGlobalStyle} from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Drawer from '@material-ui/core/Drawer';
import Navbar from '../components/navbar';
import AppCtx from './app-context';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: whitesmoke;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .container {
    width: 80vw;
    margin: auto;
  }

  div {
    line-height: 1.5rem;
    font-family: 'Open Sans';
  }

  a {
    color: red;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  table {
    text-align: center;
    border-spacing: 30px;
  }

  table tr th {
    font-weight: bold;
    border-bottom: solid 1px silver;

  }
`

const Page = styled.div`
  
  width: 80vw;
  margin: auto;
  margin-top: 5rem;
`


const msalInstance = new PublicClientApplication(msalConfig);
// const msalInstance = new UserAgentApplication(msalConfig);

function MyApp({ Component, pageProps, router }) {
  const [showDraw, setShowDrawer] = useState (false);

  const [email, setEmail] = useState(null);
  const [pupilProgress, setPupilProgress] = useState(null);

  const handleDrawerClick = () => {
    setShowDrawer(true);
  }

  const toggleDrawer = (state) => {
    setShowDrawer(state)
  }

  const AppState = {email, setEmail, pupilProgress, setPupilProgress}
  
  return (
   
  <MsalProvider instance={msalInstance}>
    <AppCtx.Provider value={AppState}>
      
      <GlobalStyles />
      <Navbar onClick={handleDrawerClick}></Navbar>

        <Drawer anchor="left" 
                open={showDraw} 
                onClose={() => toggleDrawer(false)}>
          <div className="drawer-inner">Hello World</div>
        </Drawer>
        <Page>
          <Component {...pageProps} />
        </Page>
      
    </AppCtx.Provider>
  </MsalProvider>
  
  )
}

export default MyApp
