
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const Navbar = ({onClick}) => {
    const handleClick = () => {
        onClick && onClick()
    }

    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <h6 variant="h6" className="title">
            <Link href="/">Programming With Python</Link>
          </h6>
          <Button color="inherit">Login</Button>
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