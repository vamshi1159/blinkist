import { IAction } from "./actions";
import { GET_BOOKS, IState ,GET_BOOK,GET_CURRENT_READINGS, GET_FINISHED_READINGS, UPDATE_TO_FINISHED, UPDATE_TO_READING, ADD_TO_LIBRARY} from "./types";

const BooksReducer=(state:IState,action:IAction):IState=>{

    switch(action.type){
        case GET_BOOKS:
            return {
                    ...state,
                    books:action.payload
            };
        case GET_BOOK:
            return {
                ...state,
                book:action.payload
            }
        case GET_CURRENT_READINGS:
            return {
                ...state,
                books:action.payload
            }
        case GET_FINISHED_READINGS:
            return {
                ...state,
                books:action.payload
            }
        case UPDATE_TO_FINISHED:
            return {
                ...state,  
            }
        case UPDATE_TO_READING:
            return {
                ...state,
            }
        case ADD_TO_LIBRARY:
            return{
                ...state
            }
         default:
            return state;
    }
}
export default BooksReducer;