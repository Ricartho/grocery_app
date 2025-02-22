import React,{useState} from "react";

import{Box,TextField,Button} from '@mui/material';

const ArticleCreate = ({onCreate,onRefresh}) =>{

    const [nameValue,setNameValue] = useState('');
    const [priceValue, setpriceValue] = useState('');
    const [qtValue,setQtValue] = useState('');

    const handlePrice = (e) =>{
        const val = e.target.value;
        const verif = val.replace(/[^0-9]/g, '');
        setpriceValue(verif);
    };
    const handleQt = (e) =>{
        const val = e.target.value;
        const verif = val.replace(/[^0-9]/g, '');
        setQtValue(verif);
    };
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
          <TextField label="Unit Price(numbers only)" variant="standard" type='int' required value={priceValue} onChange={handlePrice}
            sx={{
                marginRight:'5%',
                marginLeft:'1%'
            }}/>
          <TextField label="Quantity(numbers only)" variant="standard" type='int' required value={qtValue} onChange={handleQt}
          sx={{
            marginRight:'5%',
            marginLeft:'1%'
          }}/>
          <Button variant="text" type='submit' color='primary'
          sx={{
            marginLeft:'2%',
            marginRight:'2%',
          }}> 
            Add 
          </Button>
           <Button variant="text" color='primary' name="delete" onClick={onRefresh}   sx={{
            marginLeft:'2%',
            marginRight:'2%',
          }}> 
            Refresh
            </Button>

        </form>
   
 );
};

export default ArticleCreate;