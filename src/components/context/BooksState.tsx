import React, { useReducer } from 'react';
import BooksReducer from './BooksReducer';
import { ADD_TO_LIBRARY, GET_BOOK, GET_BOOKS, GET_CURRENT_READINGS, GET_FINISHED_READINGS, IState, UPDATE_TO_FINISHED, UPDATE_TO_READING } from './types';
import axios from 'axios';
import BooksContext from './BooksContext';

type IBookState={
    children:React.ReactNode
}
const BooksState=(props:IBookState)=>{
    const initialState:IState={
        books:[],
        book:{}
    }
    const [state,dispatch]=useReducer(BooksReducer,initialState);

    const getBooks= async ()=>{
        const res=await axios.get('http://localhost:3004/bookRepository');
        console.log(res.data);
        dispatch({
            type:GET_BOOKS,
            payload:res.data
        })
    }
    const getBook=async(id?:string)=>{
        const res=await axios.get(`http://localhost:3004/bookRepository/${id}`);
        dispatch({
            type:GET_BOOK,
            payload:res.data
        })
    }
    const getCurrentReadings=async()=>{
        console.log("readings");
        const res=await axios.get('http://localhost:3004/bookRepository?status=true');
        dispatch({
            type:GET_CURRENT_READINGS,
            payload:res.data
        })
    }
    const getFinishedReadings=async()=>{
        const res=await axios.get('http://localhost:3004/bookRepository?isFinished=true');
        dispatch({
            type:GET_FINISHED_READINGS,
            payload:res.data
        })
    }
    const updateToFinished=async(id?:number)=>{
        await axios.patch(`http://localhost:3004/bookRepository/${id}`,{'isFinished':true,'status':false});
        
        dispatch({
            type:UPDATE_TO_FINISHED
        })
        getCurrentReadings();
    }
    const updateToReading=async(id?:number)=>{
        await axios.patch(`http://localhost:3004/bookRepository/${id}`,{'isFinished':false,'status':true});
        
        dispatch({
            type:UPDATE_TO_READING
        })
        getFinishedReadings();
    }
    const addToLibrary=async(id?:number)=>{
        await axios.patch(`http://localhost:3004/bookRepository/${id}`,{'isFinished':false,'status':true});
        dispatch({
            type:ADD_TO_LIBRARY
        })
        getBooks();
    }
    return (
        <BooksContext.Provider
         value={{
            books:state.books,
            book:state.book,
            getBooks:getBooks,
            getBook:getBook,
            getCurrentReadings:getCurrentReadings,
            getFinishedReadings:getFinishedReadings,
            updateToFinished:updateToFinished,
            updateToReading:updateToReading,
            addToLibrary:addToLibrary
        }}
        >
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksState;
