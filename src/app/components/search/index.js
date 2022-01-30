import React from 'react';
import ToDoList from './ToDoList';
import './styles.css';

export const Search=(props) =>{
    return(
    <div className="searchWrapper">
        <ToDoList searchDataList={props.searchDataList}/>
    </div>
);
    }
