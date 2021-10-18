
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Image from 'next/image';

import {useAccount, useMsal, useMsalAuthentication, AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import AppCtx from '../app-context';
import {useContext, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Spinner from '../spinner';

const ProfileLink = styled.span`
  cursor: pointer;

  &:hover {
    color: red;
    text-decoration: underline;
  }
`
import {useRouter} from 'next/router'

const Navbar = ({onClick, onLogin}) => {

    // const {login, logout, result, error} = useMsalAuthentication("popup");
    const router = useRouter();

    const handleClick = () => {
        onClick && onClick()
    }

    const {
      email, setEmail, 
      pupilProgress, setPupilProgress, 
      pupilDetails, setPupilDetails
    } = useContext(AppCtx);
    
    const { instance, accounts, inProgress } = useMsal();

    const handleLogin = () => {
      instance.loginPopup();
    }

    const handleLogout = () => {
      instance.logout();
    }
    
    return (
        <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <h6 variant="h6" className="title">
            <Link href="/">
              <Image 
                src="/images/logo.png"
                width="146"
                height="34"

              />
            </Link>
          </h6>


          <AuthenticatedTemplate>
            {pupilDetails && <Link href="/profile"><div><ProfileLink>{pupilDetails.firstName}</ProfileLink></div></Link>}
            {!pupilDetails && <span><Spinner/>Loading pupil data</span>}
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <Button color="inherit" onClick={handleLogin}>Login</Button>
          </UnauthenticatedTemplate>
          
        </Toolbar>
        <style jsx>{`
          
          .menuButton {
            margin-right: 2rem;
          }

          .title {
            flex: 1;
            color: red;
            font-size: 2rem;
            margin-top: 0px;
            margin-bottom: 0px;
            font-family: 'Open sans';
            font-weight: bold
          }

        `}</style>
      </AppBar>
    )
}

export default Navbar;