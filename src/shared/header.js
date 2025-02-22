import React from "react";

import {Box,AppBar,Toolbar,Typography} from '@mui/material';

const linkStyle = {
    textDecoration: "none",
};
const Header =()=>{
    return(
        <Box sx={{
            marginBottom:'5%',
            width:'100%',
        
          }}>
            <header>
              <AppBar position='static' sx={{ backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }}>
                <Toolbar>
                  <Typography variant='h5' sx={{margin:'auto', color: "rgb(0,0,0)"}}>
                    <a style={linkStyle} href='/'>Grocery List App </a> 
                  </Typography>
                </Toolbar>
              </AppBar>
            </header>
          </Box>
    );
};
export default Header;