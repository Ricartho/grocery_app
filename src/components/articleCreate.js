import React,{useState} from "react";

import{Box,TextField,Button} from '@mui/material';

const ArticleCreate = ({onCreate,onRefresh}) =>{

    const [nameValue,setNameValue] = useState('');
    const [priceValue, setpriceValue] = useState('');
    const [qtValue,setQtValue] = useState('');
    const capitalize = (word) =>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
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
    const handleName =(e) =>{
     const w = e.target.value;
      const cap = capitalize(w);
      setNameValue(cap);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        onCreate(nameValue,priceValue,qtValue);
        setNameValue('');
        setpriceValue('');
        setQtValue('');
        alert('New item added!');
        
    };
   
 return(
   
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField label="Item Name" variant="standard" type='string' required value={nameValue} onChange={handleName}
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
          <Button variant="text" type='submit' color='primary'> 
            Add 
          </Button>
           <Button variant="text" color='primary' name="delete" onClick={onRefresh}    > 
            Refresh
            </Button>

        </form>
   
 );
};

export default ArticleCreate;