import '../styles/globals.css'


import { MsalProvider } from "@azure/msal-react";
import { UserAgentApplication, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../components/authConfig";


const msalInstance = new PublicClientApplication(msalConfig);
// const msalInstance = new UserAgentApplication(msalConfig);

function MyApp({ Component, pageProps }) {

  console.log("Server ID::", process.env.NEXT_PUBLIC_SERVER_ID)

  return (
   
  <MsalProvider instance={msalInstance}>
    <Component {...pageProps} />
  </MsalProvider>
  
  )
}

export default MyApp
