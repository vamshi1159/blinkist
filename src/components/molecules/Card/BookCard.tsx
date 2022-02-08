import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
  import * as React from "react";
  import { makeStyles } from "@material-ui/styles";
  import TimeIcon from "@mui/icons-material/AccessTime";
  import AddIcon from "@mui/icons-material/Add";
  import statusBar from "../../assets/statusBar.png";
import CustomButton from "../../atoms/Button/CustomButton";
import { Book } from "../../context/types";
import { Link } from "react-router-dom";
  const useStyles = makeStyles({
    image: {
      width: "285px",
      maxHeight: "287px",
      border: "none",
      boxShadow: "none",
  
    },
    content: {
      display: "flex",
      flexDirection: "column",
      padding: "1px",
      margin: "0",
      textAlign: "left",
      borderRadius:'1px',
      borderBottom: "0.5px solid #BAC8CE",
      borderLeft: "1px solid #BAC8CE",
      borderRight: "1px solid #BAC8CE",
      borderTop: "0.5px solid #BAC8CE",
    },
  
    icon: {
      minWidth: "30px",
    },
    actions: {
      padding: '0.5px',
      borderRadius:'2px',
      border: "1px solid #BAC8CE",
  
    },
  });
  
  
  type BookCardProps = {
    show?:boolean
    book: Book;
    handleClick: () => void;
  };
  
  export function BookCard({ book, handleClick ,show}: BookCardProps) {
    const styles = useStyles();
    return (
      <Card sx={{borderRadius:'1px solid #BAC8CE'}} >
        <Box
          to={`/books/${book.id}`}
          component={Link}
          style={{ textDecoration: "none" ,}}
        
        >
          <CardMedia
            className={styles.image}
            component='img'
            src={book.image}
            alt='image'
          />
  
          <CardContent className={styles.content} >
            <Box>
              <Typography variant='subtitle2' sx={{ fontWeight: 800 }}>
                {book.title}
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: 400 ,fontStyle:'normal'}}>
                {book.author}
              </Typography>
              <ListItem style={{ padding: "0px 0px" }}>
                <ListItemIcon style={{ minWidth: "27px" }}>
                  <TimeIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  {book.time} minutes read
                </ListItemText>
                <ListItemText style={{ right:'0px' }}>
                  <MoreHorizIcon/>
                </ListItemText>
              </ListItem>
            </Box>
          </CardContent>
        </Box>
        {book.status === false && book.isFinished===false && (
          <Box className={styles.actions}>
            <CardActions style={{ padding: 0 }}>
              <CustomButton
                label='Add to library'
                startIcon={<AddIcon />}
                variant='outlined'
                color='secondary'
                size='large'
                width={true}
                handleClick={handleClick}
              
              />
            </CardActions>
          </Box>
        )}
         {!show && book.status ===true && book.isFinished===false && (
          <Box className={styles.actions}>
            <CardActions style={{ padding: 0 }}>
              <CustomButton
                label='finished'
                variant='outlined'
                color='secondary'
                size='large'
                width={true}
                handleClick={handleClick}
              
              />
            </CardActions>
          </Box>
        )}
        {!show && book.isFinished === true && book.status===false && (
          <Box className={styles.actions}>
            <CardActions style={{ padding: 0 }}>
              <CustomButton
                label='Read Again'
                variant='outlined'
                color='secondary'
                size='large'
                width={true}
                handleClick={handleClick}
              
              />
            </CardActions>
          </Box>
        )}
        {(book.status === true || book.isFinished===true) && (
          <Box >
            <CardMedia src={statusBar} component='img' />
          </Box>
        )}
      </Card>
    );
  }
  
  export default BookCard;