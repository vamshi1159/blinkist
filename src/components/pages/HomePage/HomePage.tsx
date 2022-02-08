
import { Box,  } from '@mui/material';
import React, { useContext, useEffect,} from 'react';
import BooksContext, { IContextValue } from '../../context/BooksContext';



export const HomePage = () => {
    
  const booksContext=useContext<IContextValue>(BooksContext);

  useEffect(()=>{
    booksContext.getBooks();
    console.log(booksContext.books);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  
  
  
  return  <Box sx={{width:'658px',padding:'20px'}}>
      

  </Box>
  ;
};

export default HomePage;