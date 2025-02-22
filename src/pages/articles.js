import React from "react";

import ArticleCreate from "../components/articleCreate";
import ArticleList from "../components/articleList";

import { Box } from "@mui/material";

function Articles({articles,onCreate,onUpdate,onDelete}){
    // const at = [{
    //     "article":{"id":12,
    //         "name": "dad",
    //         "price":1,
    //         "qt": 45,
    //     }
    // }
    //     ,];
    return(
        <>
             <Box sx={{
          // border:'1px solid red',
          marginTop:'2%',
          marginBottom:'5%',
          width:'100%',
        }}>
          <ArticleCreate onCreate={onCreate} />
        </Box>
          

        <Box sx={{
           marginTop:'2%',
           marginBottom:'5%',
           width:'100%',
        }}>
          <ArticleList articles={articles} onDelete = {onDelete} onUpdate={onUpdate}/>
        
        </Box>
        </>
    );
{/* <Paper elevation={5} variant='outlined' square='false'
        sx={{
          minHeight:'100%',
          overflowX:'hidden',
          overflowY:'hidden',
          width:'60%',
          margin:'auto',
          marginTop:'5%'
        }}
      > */}
        {/* <Box sx={{
          marginBottom:'5%',
          width:'100%',
      
        }}>
          <header>
            <AppBar position='static' sx={{ backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }}>
              <Toolbar>
                <Typography variant='h5' sx={{margin:'auto', color: "rgb(0,0,0)"}}> Grocery List App </Typography>
              </Toolbar>
            </AppBar>
          </header>
        </Box> */}
       
        
    //   </Paper>
}
export default Articles;