import { createContext } from "react";
import { Book } from "./types";

export interface IContextValue{
    books:Book[],
    book:Book,
    getBooks:()=>void,
    getBook:(id?:string)=>void,
    getCurrentReadings:()=>void,
    getFinishedReadings:()=>void,
    updateToFinished:(id?:number)=>void,
    updateToReading:(id?:number)=>void,
    addToLibrary:(id?:number)=>void
}
 const ContextDefaultValue:IContextValue={
    books:[],
    book:{},
    getBooks:()=>{},
    getBook:()=>{},
    getCurrentReadings:()=>{},
    getFinishedReadings:()=>{},
    updateToFinished:()=>{},
    updateToReading:()=>{},
    addToLibrary:()=>{}
}
const BooksContext=createContext<IContextValue>(ContextDefaultValue);

export default BooksContext;