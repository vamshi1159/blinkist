import {
    Box,
    Button,
    Container,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tab,
    Typography,
  } from "@mui/material";
  import * as React from "react";
  import TimeIcon from "@mui/icons-material/AccessTime";
  import { makeStyles } from '@material-ui/styles';
  
  import { TabContext, TabList, TabPanel } from "@mui/lab";
  import { useEffect,useContext ,useState} from "react";
  import { useParams } from "react-router-dom";
import BooksContext, { IContextValue } from "../../context/BooksContext";
import { Book } from "../../context/types";
 
  
  const useStyles = makeStyles({
    buttonHead: {
      marginTop: 80,
      marginLeft: 0,
      display: "relative",
      textAlign: "left",
    },
    buttonStyles: {
      marginLeft: 10,
    },
  });
  
  const BookDetail = () => {

    const [value,setValue] =useState('1');
    const {id} =useParams();
    const booksContext=useContext<IContextValue>(BooksContext);
    useEffect(() => {
      booksContext.getBook(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const {book}=booksContext;
    const classes = useStyles();
    const handleFinish=(book:Book)=>{
        booksContext.updateToFinished(book.id);
  }
  const handleTabChange=(event: React.SyntheticEvent, newValue: string)=>{
      setValue(newValue);
  }
    return (
      <Container>
        <Box sx={{ marginTop: "80px", marginLeft: 5 }} data-testid='BookDetail-book'>
          <Grid container flexDirection={"row"}>
            <Grid item md={7}>
              <br />
              <Box component='div' style={{ textAlign: "left" }}>
                <Typography variant='h1' fontWeight='bold' lineHeight='45px'>
                  {book && book.title}
                </Typography>
                <Typography fontSize='20px' fontWeight='400' lineHeight='45px'>
                  Turning Your Business into an Enduring Great Company
                </Typography>
                <Typography fontSize='16px' fontWeight='normal' lineHeight='25px'>
                  By {book && book.author}
                </Typography>
  
                <ListItem style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <ListItemIcon style={{ minWidth: "27px" }}>
                    <TimeIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    style={{ paddingLeft: "0px", paddingRight: "0px" }}
                  >
                    {book && book.time} minutes read
                  </ListItemText>
                </ListItem>
              </Box>
              <Box className={classes.buttonHead}>
                <Button
                  data-testid='read-now'
                  style={{
                    textTransform: "none",
                  }}
                  children={'Readnow'}
                  variant='outlined'
                  color='primary'
                  onClick={() => {
                   
                  }}
                />
  
                <Button
                  data-testid='finish-now'
                  style={{
                    marginLeft: 50,
                  }}
                  children={"Finished reading"}
                  variant='contained'
                  color='primary'
                  className={classes.buttonStyles}
                  onClick={() => book && handleFinish(book)}
                />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box>
                <img
                  src={book && book.image}
                  alt='img'
                  style={{ width: "304px", height: "304px" }}
                />
              </Box>
            </Grid>
  
            <Grid item md={7}>
              <br />
              <br />
              <Box sx={{ typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleTabChange}
                      aria-label='lab API tabs example'
                      indicatorColor='primary'
                      textColor='inherit'
                    >
                      <Tab
                        sx={{ minWidth: "215px" }}
                        label={<Typography variant='body1'>Synopsis</Typography>}
                        value='1'
                      />
                      <Tab
                        sx={{ minWidth: "215px" }}
                        label={
                          <Typography variant='body1'>Who is it for?</Typography>
                        }
                        value='2'
                      />
                      <Tab
                        sx={{ minWidth: "215px" }}
                        label={
                          <Typography variant='body1'>
                            About the author
                          </Typography>
                        }
                        value='3'
                      />
                    </TabList>
                  </Box>
                  <TabPanel value='1'>
                    <Typography
                      variant='body1'
                      lineHeight='26px'
                      fontWeight={400}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.Illum tempore porro quam voluptatum id eaque! Magnam
                      similique fugit voluptas aliquam impedit? Alias saepe
                      consequuntur iure beatae odit doloribus molestias veniam!
                    </Typography>
                  </TabPanel>
                  <TabPanel value='2'>
                    <Typography variant='body1'>
                      Illum tempore porro quam voluptatum id eaque! Illum tempore
                      porro quam voluptatum id eaque! Illum tempore porro quam
                      voluptatum id eaque!
                    </Typography>
                  </TabPanel>
                  <TabPanel value='3'>
                    <Typography variant='body1'>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.Illum tempore porro quam voluptatum id eaque! Magnam
                      similique fugit voluptas aliquam impedit? Alias saepe
                      consequuntur iure beatae odit doloribus molestias veniam!
                    </Typography>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Box>
       
      </Container>
    );
  };
  export default BookDetail;
