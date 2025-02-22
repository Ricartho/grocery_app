import React,{useState,useEffect} from 'react';
import { createBrowserRouter,RouterProvider,useLocation} from 'react-router-dom';
import axios from 'axios';

//react pages or components
import Articles from './pages/articles';
import ArticleCreate from './components/articleCreate';
import ArticleList from './components/articleList';


import logo from './logo.svg';
import './App.css';
//MUI 
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
import { convertLength } from '@mui/material/styles/cssUtils';
import Root from './pages/root';

function App() {

    const value = [
      {"id":1,"name":"Item1","price":10,"qt":50},
      {"id":2,"name":"Item2","price":10,"qt":70},
      {"id":3,"name":"Item3","price":10,"qt":60},
    ];     
    const at = [{
      "article":{"id":12,
          "name": "dad",
          "price":1,
          "qt": 45,
      }
  }
      ,];
    const [articles,setArticles] = useState([]);
    const [nameValue,setNameValue] = useState('');
    const [priceValue, setpriceValue] = useState('');
    const [qtValue,setQtValue] = useState('');
    const [showEdit,setShowEdit] = useState(false);
    const [idToEdit,setIdToEdit] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[reload,setReload] = useState(0);

    //get list of articles from the DB
      const fetchArticles = async() =>{
      await axios.get('http://localhost:3000/articles')
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
      await axios.post('http://localhost:3000/articles',{name,price,qt})
                  .then(function(resp){
                    const updatedArticles = [...articles,resp.data];
                    setArticles(updatedArticles);
                    setReload(1);
                  })
                  .catch(function(err){
                    console.log(err);
                  })
                  .finally(function(er){
                    setReload(1);
         
                  })
                  ;
      
    
    }
    
      //update article in DB
    const updatedArticleById = async(id,name,price,qt) => {
      const resp = await axios.put(`http://localhost:3000/articles/${id}`,{name,price,qt});

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
      await axios.delete(`http://localhost:3000/articles/${id}`)
      .then(function(resp){
        const updatedArticles = articles.filter((article)=>{return article.article.id !== id});
        setArticles(updatedArticles);
        setReload(1);
      })
      .catch(function(err){

      });
    };

    useEffect(()=>{
      fetchArticles();
    },[reload]);

    if (loading) {
      return <p>Loading data...</p>;
    }
    if (error) {
      return <p>Error: {error.message}</p>
    }

console.log(articles);
const myRouter = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children:[
      {
        index: true,
        element: <Articles articles={articles} onCreate={createArticle} onDelete = {deleteArticleById} onUpdate={updatedArticleById}/>,
      },
    ],
  }
]);
  return (
   
        <RouterProvider router={myRouter} />
      // <Paper elevation={5} variant='outlined' square='false'
      //   sx={{
      //     minHeight:'100%',
      //     overflowX:'hidden',
      //     overflowY:'hidden',
      //     width:'60%',
      //     margin:'auto',
      //     marginTop:'5%'
      //   }}
      // >
      //   <Box sx={{
      //     marginBottom:'5%',
      //     width:'100%',
      
      //   }}>
      //     <header>
      //       <AppBar position='static' sx={{ backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }}>
      //         <Toolbar>
      //           <Typography variant='h5' sx={{margin:'auto', color: "rgb(0,0,0)"}}> Grocery List App </Typography>
      //         </Toolbar>
      //       </AppBar>
      //     </header>
      //   </Box>

      //   <Box sx={{
      //     // border:'1px solid red',
      //     marginTop:'2%',
      //     marginBottom:'5%',
      //     width:'100%',
      //   }}>
      //     <ArticleCreate onCreate={createArticle} />
      //   </Box>
          

      //   <Box sx={{
      //      marginTop:'2%',
      //      marginBottom:'5%',
      //      width:'100%',
      //   }}>
      //     <ArticleList articles={articles} onDelete = {deleteArticleById} onUpdate={updatedArticleById}/>
        
      //   </Box>
        
      // </Paper>
   
  );
}

export default App;
