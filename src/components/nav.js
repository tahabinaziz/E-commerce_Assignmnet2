import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle ={
        color:'white',
        outline:'none',
       
    }

    return (
        <React.Fragment>
            <MuiThemeProvider>
                <AppBar position="static">
                
                    <Toolbar>
                   
                        <Link to="/" style={navStyle}>
                            <Button color="inherit"> Home
                            </Button>
                        </Link>
                        <Link to="/dashboard" style={navStyle}>
                        <Button color="inherit"> Purchase
                        </Button>
                    </Link>
                    <Link to="/admin" style={navStyle}>
                    <Button color="inherit"> Admin
                    </Button>
                </Link>
                
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </React.Fragment>


    
    )
}
export default Nav