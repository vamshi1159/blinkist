import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import BooksState from './components/context/BooksState';
import { Footer } from './components/molecules/Footer/Footer';
import { NavBar } from './components/organisms/Header/NavBar';
import BookDetail from './components/pages/BookDetail/BookDetail';
import { ExplorePage } from './components/pages/Explore/ExplorePage';

import Library from './components/pages/Library/Library';
import theme from './configuration/Theme/theme';

function App() {
  return (
    <>
  <ThemeProvider theme={theme}>
    <BooksState>
       
        
        
         <Router>
         <NavBar/>
          <Routes>
            <Route path='/' element={<ExplorePage/>}/>
            <Route path='/explore' element={<ExplorePage/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/books/:id" element={<BookDetail/>}/>
          </Routes>
            </Router>


         <Footer/>
    </BooksState>
  </ThemeProvider>
    </>
  );
}

export default App;
