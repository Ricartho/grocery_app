import React from "react";
import ArticleItem from "./articleItem";

import { TableContainer,TableHead,TableRow,TableCell, TableBody,Table } from "@mui/material";

const ArticleList = ({articles,onDelete,onUpdate}) =>{
    console.log('article list test')
console.log(articles);
    const renderedArticles = articles.map(article => (
        // console.log(article.id)
        <ArticleItem key={article.id} article={article} onDelete={onDelete} onUpdate={onUpdate}/>
    ));
    return(
        <TableContainer>
            <Table size='medium'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:'bold'}}>Item</TableCell>
                  <TableCell sx={{fontWeight:'bold'}}>Price/Unit</TableCell>
                  <TableCell sx={{fontWeight:'bold'}}>Quantity</TableCell>
                  <TableCell sx={{fontWeight:'bold'}}>Total Price</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderedArticles}
              </TableBody>
            </Table>
        </TableContainer>
    );

}
export default ArticleList;