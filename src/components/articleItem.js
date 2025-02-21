import React, {useState} from "react";

import EditForm from "./editForm";

import { TableRow, TableCell,Button, Typography} from "@mui/material";

const ArticleItem = ({article,onDelete,onUpdate}) =>{
console.log('article item test');
console.log(article.id);
    const [showEdit,setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleDelete = () =>{
        onDelete(article.id);
    };

    const handleUpdateSubmit = (id,newName,newPrice,newQt) => {
        onUpdate(id,newName,newPrice,newQt);
        setShowEdit(false);
    };

    const closeEditForm = () =>{
        setShowEdit(false);
    }

    let content =
        <TableRow key={article.id}>
            <TableCell>{article.name}</TableCell>
            <TableCell>{article.price}</TableCell>
            <TableCell>{article.qt}</TableCell>
            <TableCell>{article.price * article.qt}</TableCell>
            <TableCell><Button variant="text" color='primary' name="delete" onClick={handleEditClick}>Edit</Button></TableCell>
            <TableCell><Button variant="text" color='primary' name="delete" onClick={handleDelete}>Delete</Button></TableCell>
       
            </TableRow>

        if(showEdit){content = <EditForm article={article} onUpdateSubmit={handleUpdateSubmit} closeEditForm={closeEditForm}onUpdate={onUpdate}/>}

    return(
            <>{content}</>
      
        // <TableRow key={article.id}>
        //     <TableCell>{article.name}</TableCell>
        //     <TableCell>{article.price}</TableCell>
        //     <TableCell>{article.qt}</TableCell>
        //     <TableCell>{article.price * article.qt}</TableCell>
        //     <TableCell><Button variant="text" color='primary' name="delete" >Edit</Button></TableCell>
        //     <TableCell><Button variant="text" color='primary' name="delete" onClick={handleDelete}>Delete</Button></TableCell>
        // </TableRow>
    );

}
export default ArticleItem;