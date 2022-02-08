import { Box, Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import BooksContext, { IContextValue } from '../../context/BooksContext';
import { Book } from '../../context/types';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import BookGrid from '../../organisms/Books/BookGrid';

export const ExplorePage = () => {
    const booksContext=useContext<IContextValue>(BooksContext);
    const {books}=booksContext;
    useEffect(()=>{
        booksContext.getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
const handleClick=(book:Book)=>{
    booksContext.addToLibrary(book.id);
}
  return (
    <Container >
    <Box sx={{marginRight:'259px',width:'658px',padding:'20px'}}>
      <SearchInput  />
    </Box>
    <Box>
      <Typography variant='subtitle1' fontWeight={600} sx={{color:'#03314B'}}>
        Trending blinks
      </Typography>
    </Box>
    <Box>
      <BookGrid bookList={books} handleClick={handleClick} show={true} />
    </Box>
  </Container>
    
    );
  
};
