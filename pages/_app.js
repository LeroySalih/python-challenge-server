import '../styles/globals.css'


import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../components/authConfig";


const msalInstance = new PublicClientApplication(msalConfig);
console.log(msalConfig);

function MyApp({ Component, pageProps }) {

  return (
   
  <MsalProvider instance={msalInstance}>
    <Component {...pageProps} />
  </MsalProvider>
  
  )
}

export default MyApp
