import React,{useState} from "react";

import { TableCell,TextField,Button, TableRow, Typography } from "@mui/material";


const EditForm = ({article,onUpdateSubmit,closeEditForm,onUpdate}) => {
    console.log('edit form test');
    console.log(article);
    console.log(article.id);
    const[newName,setNewName] = useState(article.name);
    const[newPrice,setNewPrice] = useState(article.price);
    const[newQt,setNewQt] = useState(article.qt);


const handleSubmit = (e) =>{
    e.preventDefault();
    onUpdateSubmit(article.id,newName,newPrice,newQt);
    // onUpdate(article.id,newName,newPrice,newQt);
};
    return(

            <TableRow key={article.id}>
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
       
       
           
        // <TableRow key={article.id}>
        // <form>
        // <TableCell><TextField variant="standard" type='string' value={newName} onChange={(e) => setNewName(e.target.value)}/></TableCell>
        //  <TableCell><TextField variant="standard" type='string' value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/></TableCell>
        //  <TableCell><TextField variant="standard" type='string' value={newQt} onChange={(e) => setNewQt(e.target.value)}/></TableCell>
        //  <TableCell><Button variant="text" type='submit' color='primary' > Save</Button></TableCell>
        //  <TableCell><Button variant="text" color='primary' name="delete" onClick={closeEditForm} >Cancel</Button></TableCell>
        // </form>
   
        //  </TableRow>
        
    );
}
export default EditForm;