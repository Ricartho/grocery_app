import React,{useState,useEffect} from 'react';

import axios from 'axios';

//react pages or components

import ArticleCreate from './components/articleCreate';
import ArticleList from './components/articleList';


import './App.css';
//MUI 
import {Box,Paper,AppBar,Toolbar,Typography, Button} from '@mui/material';

function App() {

    const [articles,setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

    //get list of articles from the DB
      const fetchArticles = async() =>{
      await axios.get(process.env.REACT_APP_BACKEND_URL+'/articles')
                    .then(function(resp){
                      console.log("fetching article from DB");
                      console.log(resp.data);
                      setArticles(resp.data);
                   
                    })
                    .catch(function(err){
                      console.log(err);
                      setError(err);
                    })
                    .finally(function(er){
                      setLoading(false);
                    });
                    
                    console.log(articles);
                
      };

      //save in article in DB
    const createArticle = async(name,price,qt) =>{
      await axios.post(process.env.REACT_APP_BACKEND_URL+'/articles',{name,price,qt})
                  .then(function(resp){
                    const updatedArticles = [resp.data,...articles];
                    setArticles(updatedArticles);
                    
                  })
                  .catch(function(err){
                    console.log(err);
                  }) ;
      }
    
      //update article in DB
    const updatedArticleById = async(id,name,price,qt) => {
      const resp = await axios.put(process.env.REACT_APP_BACKEND_URL+`/articles/${id}`,{name,price,qt});

      const updatedArticles = articles.map((article)=>{
        if(article.article.id === id){
          console.log(resp.data);
          return {...article, ...resp.data};
        }
        return article;
      });
      console.log(updatedArticles);
      setArticles(updatedArticles);
     
    };

      //remove article from DB
    const deleteArticleById = async(id) =>{
      await axios.delete(process.env.REACT_APP_BACKEND_URL+`/articles/${id}`)
      .then(function(resp){
        const updatedArticles = articles.filter((article)=>{return article.article.id !== id});
        setArticles(updatedArticles);
      })
      .catch(function(err){

      });
    };

    //remove all articles at once

    const deleteArticles = async() =>{
      await axios.delete(process.env.REACT_APP_BACKEND_URL+'/articles')
      .then(function(resp){
        const updatedArticles = articles.filter((article)=>false);
        setArticles(updatedArticles);
      })
    };

    useEffect(()=>{
      fetchArticles();
    },[]);

    if (loading) {
      return <p>Loading data...</p>;
    }
    if (error) {
      return <p>Error: {error.message}</p>
    }



  return (
  
       
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
        <Box sx={{
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
        </Box>

        <Box sx={{
          // border:'1px solid red',
          marginTop:'2%',
          marginBottom:'5%',
          width:'100%',
        }}>
          <ArticleCreate onCreate={createArticle} onRefresh={deleteArticles} />
        </Box>
          

        <Box sx={{
           marginTop:'2%',
           marginBottom:'5%',
           width:'100%',
        }}>
          <ArticleList articles={articles} onDelete = {deleteArticleById} onUpdate={updatedArticleById} />
        
        </Box>
        
      </Paper>
   
  );
}

export default App;
