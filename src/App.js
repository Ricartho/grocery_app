import React,{useState,useEffect} from 'react';

import ArticleCreate from './components/articleCreate';
import ArticleList from './components/articleList';


import logo from './logo.svg';
import './App.css';
import { Container,Box,Paper,AppBar,Toolbar,Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableFooter from '@mui/material/TableFooter';

function App() {

    const value = [
      {"id":1,"name":"Item1","price":10,"qt":50},
      {"id":2,"name":"Item2","price":10,"qt":70},
      {"id":3,"name":"Item3","price":10,"qt":60},
    ];     
    
    const [articles,setArticles] = useState(value);
    const [nameValue,setNameValue] = useState('');
    const [priceValue, setpriceValue] = useState('');
    const [qtValue,setQtValue] = useState('');
    const [showEdit,setShowEdit] = useState(false);
    const [idToEdit,setIdToEdit] = useState('');

    const createArticle = (name,price,qt) =>{
      const updatedArticles = [
        ...articles,
        {
          id: Math.round(Math.random() * 9999),
          name,
          price,
          qt,
        }
      ];
      setArticles(updatedArticles);
    }
    
    const updatedArticleById = (id,newName,newPrice,newQt) => {
      const updatedArticles = articles.map((article) => {
        if(article.id === id){
          return{...article, name:newName,price:newPrice,qt:newQt};
        }
        return article
      });
      console.log('update function test');
      console.log(id);
      console.log(articles);
      console.log(updatedArticles);
      setArticles(updatedArticles);
      console.log(articles);
    };

    const deleteArticleById = (id) =>{
      const updatedArticles = articles.filter((article)=>{return article.id !== id});
      console.log('delete function');
      console.log(articles);
      setArticles(updatedArticles);
      console.log(updatedArticles);
      console.log(articles);
    };

   

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
          <ArticleCreate onCreate={createArticle} />
        </Box>
          

        <Box sx={{
           marginTop:'2%',
           marginBottom:'5%',
           width:'100%',
        }}>
          <ArticleList articles={articles} onDelete = {deleteArticleById} onUpdate={updatedArticleById}/>
        
        </Box>
        
      </Paper>
   
  );
}

export default App;
