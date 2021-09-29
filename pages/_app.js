import '../styles/globals.css'

import {useState, useEffect} from 'react';
import { MsalProvider } from "@azure/msal-react";
import { UserAgentApplication, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../components/authConfig";
import styled, {createGlobalStyle} from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Drawer from '@material-ui/core/Drawer';
import Navbar from '../components/navbar';
import AppCtx from '../components/app-context';
import {useAccount, useMsal, useMsalAuthentication, AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import axios from 'axios'

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

  
  
  
  return (
   
  <MsalProvider instance={msalInstance}>
    
      <InnerApp Component={Component} pageProps={pageProps} router={router}/>
    
  </MsalProvider>
  
  )
}


const InnerApp = ({ Component, pageProps, router }) => {

  // Show Hide Drawer Functionality
  const [showDraw, setShowDrawer] = useState (false);
  const handleDrawerClick = () => {
    setShowDrawer(true);
  }

  const toggleDrawer = (state) => {
    setShowDrawer(state)
  }


  const [pupilProgress, setPupilProgress] = useState(null);
  const [pupilDetails, setPupilDetails] = useState(null);
  
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  

  const getEmail = () => {
    
    return (account && account.username.toLowerCase()) ? account.username.toLowerCase() : "Not logged in"
  }

  const AppState = {
    account,  
    getEmail, 
    pupilProgress, setPupilProgress, 
    pupilDetails, setPupilDetails
  }
  
  const getPupilDetails = async (pupilId) => {

    const {data} = await axios.get(`/api/details/${pupilId}`);

    return (data == "") ? null : data;
  }

  // when the account changes, due to a log on.
  useEffect(async () => {
    

    if (account && getEmail()) {
      
      const details = await getPupilDetails(getEmail())

      if (details) {
        
        setPupilDetails (details)
        

        const {data} = await axios.get(`/api/watch-pupil/${getEmail()}`)
        setPupilProgress(data);
      } else {
        
        

        // Create a new pupil. 
        const result = await axios.get(`/api/details/create/${getEmail()}`);

        // set the pupil details
        setPupilDetails({_id:getEmail(), firstName:"", familyName: "", className: ""});

        // redirect to the new pupil page.
        router.push(`/user-details/${getEmail()}`)

      }
      
    } else {
      setPupilProgress(null);
    }

  }, [account]);


  return (
    <>
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
    </>
  )
}

export default MyApp
