import React,{useState} from "react";

import { TableCell,TextField,Button, TableRow, Typography } from "@mui/material";


const EditForm = ({article,onUpdateSubmit,closeEditForm}) => {
    console.log('edit form test');
    console.log(article);
    console.log(article.id);

    const[newName,setNewName] = useState(article.article.name);
    const[newPrice,setNewPrice] = useState(article.article.price);
    const[newQt,setNewQt] = useState(article.article.qt);


const handleSubmit = (e) =>{
    e.preventDefault();
    onUpdateSubmit(article.article.id,newName,newPrice,newQt);
  
};
    return(

            <TableRow key={article.article.id}>
              <TableCell>
                
                <TextField variant="standard" type='string' value={newName} onChange={(e) => setNewName(e.target.value)}/>
         
              </TableCell>
              <TableCell>
               
                <TextField variant="standard" type='string' value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
           
              </TableCell>
              <TableCell>
               
                <TextField variant="standard" type='string' value={newQt} onChange={(e) => setNewQt(e.target.value)}/>
            
              </TableCell>
              <TableCell>
                <form autoComplete="off" onSubmit={handleSubmit}>
                 <Button variant="text" type='submit' color='primary'> Save</Button>
                </form>
                
              </TableCell>
              <TableCell><Button variant="text" color='primary' name="delete" onClick={closeEditForm} >Cancel</Button></TableCell>
                
            </TableRow>
       
       
        
    );
}
export default EditForm;