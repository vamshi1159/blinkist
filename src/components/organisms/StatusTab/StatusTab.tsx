import * as React from "react";
import { Tab, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { useState, useEffect,useContext } from "react";
import BookGrid from "../Books/BookGrid";
import BooksContext, { IContextValue } from "../../context/BooksContext";

import { Book } from "../../context/types";
const useStyles = makeStyles(() => ({
  root: {
    width: "400px",
  },
}));

const StatusTab = () => {
    const booksContext=useContext<IContextValue>(BooksContext);
    const {books}=booksContext;
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
 useEffect(() => {
   if(selectedTab==='0')
   {
       console.log('vamshi');
       booksContext.getCurrentReadings();
   }
   else
   {
       console.log("first");
       booksContext.getFinishedReadings();
   }
   
 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [selectedTab]);
 
 const finishedToReading=(book:Book)=>{
   booksContext.updateToFinished(book.id);
 }
 const updateToReading=(book:Book)=>{
   booksContext.updateToReading(book.id);
 }
  return (
    <>
      <TabContext value={selectedTab}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          width='720px'
          marginBottom={2}
        >
          <TabList value={selectedTab} onChange={handleChange}>
            <Tab label='Currently reading' className={styles.root} value={'0'} />
            <Tab label='Finished' className={styles.root} value={'1'} />
          </TabList>
        </Box>

        <Box>
          <TabPanel  value={'0'} id='currently-reading'>
            <BookGrid bookList={books} handleClick={finishedToReading} show={false}/>
          </TabPanel>
          <TabPanel value={'1'} id='finish'>
            <BookGrid bookList={books} handleClick={updateToReading}show={false}></BookGrid>
          </TabPanel>
        </Box>
      </TabContext>
    </>
  );
};

export default StatusTab;