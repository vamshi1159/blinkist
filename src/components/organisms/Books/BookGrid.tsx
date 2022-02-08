import { Box, Grid } from "@mui/material";
import * as React from "react";
import {Book}  from "../../context/types";
import BookCard from "../../molecules/Card/BookCard";

interface BookList {
  show?:boolean;
  bookList: Array<Book>;
  handleClick?: (book: Book) => void;
}

const BookGrid = ({ bookList, handleClick ,show}: BookList) => {
  return (
    <Box style={{ overflow: "auto" }} data-testid='card-grid'>
      <Grid
        container
        rowGap={1}
        spacing={1}
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        {bookList.map((book) => (
          <Grid item key={book.id} md={4} sm={6} xs={12}>
            <BookCard
              book={book}
              show={show}
              handleClick={() => {
                handleClick && handleClick(book);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookGrid;