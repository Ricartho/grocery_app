import React, {useState} from "react";

import EditForm from "./editForm";

import { TableRow, TableCell,Button, Typography} from "@mui/material";

const ArticleItem = ({article,onDelete,onUpdate}) =>{
console.log('article item test');
console.log(article.article.id);
    const [showEdit,setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleDelete = () =>{
        onDelete(article.article.id);
    };

    const handleUpdateSubmit = (id,newName,newPrice,newQt) => {
        onUpdate(id,newName,newPrice,newQt);
        setShowEdit(false);
    };

    const closeEditForm = () =>{
        setShowEdit(false);
    }

    let content =
        <TableRow key={article.article.id}>
            <TableCell>{article.article.name}</TableCell>
            <TableCell>{article.article.price}</TableCell>
            <TableCell>{article.article.qt}</TableCell>
            <TableCell>{article.article.price * article.article.qt}</TableCell>
            <TableCell><Button variant="text" color='primary' name="delete" onClick={handleEditClick}>Edit</Button></TableCell>
            <TableCell><Button variant="text" color='primary' name="delete" onClick={handleDelete}>Delete</Button></TableCell>
       
            </TableRow>

        if(showEdit){content = <EditForm article={article} onUpdateSubmit={handleUpdateSubmit} closeEditForm={closeEditForm} />}

    return(
            <>{content}</>

    );

}
export default ArticleItem;