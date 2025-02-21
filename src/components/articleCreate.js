import React,{useState} from "react";

import{Box,TextField,Button} from '@mui/material';

const ArticleCreate = ({onCreate}) =>{

    const [nameValue,setNameValue] = useState('');
    const [priceValue, setpriceValue] = useState('');
    const [qtValue,setQtValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        onCreate(nameValue,priceValue,qtValue);
        setNameValue('');
        setpriceValue('');
        setQtValue('');
        
    };
 return(
   
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField label="Item Name" variant="standard" type='string' required value={nameValue} onChange={(e) => setNameValue(e.target.value)}
          sx={{
            marginRight:'5%',
            marginLeft:'1%'
          }}/>
          <TextField label="Unit Price" variant="standard" type='int' required value={priceValue} onChange={(e) => setpriceValue(e.target.value)}
          sx={{
            marginRight:'5%',
            marginLeft:'1%'
          }}/>
          <TextField label="Quantity" variant="standard" type='int' required value={qtValue} onChange={(e) => setQtValue(e.target.value)}
          sx={{
            marginRight:'5%',
            marginLeft:'1%'
          }}/>
          <Button variant="text" type='submit' color='primary'
          sx={{
            marginLeft:'2%',
          }}> 
            Add 
          </Button>
        </form>
   
 );
};

export default ArticleCreate;