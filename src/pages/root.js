import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../shared/header";

import { Paper } from "@mui/material";

function Root(){
    return(

              <Paper elevation={5} variant='outlined' square='false'
                sx={{
                  minHeight:'100%',
                  overflowX:'hidden',
                  overflowY:'hidden',
                  width:'60%',
                  margin:'auto',
                  marginTop:'5%'
                }}
              >
                <Header />
                <Outlet />
               
                
                </Paper>
    );
};
export default Root;