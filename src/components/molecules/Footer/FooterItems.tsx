import { Box, Grid, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles=makeStyles({
   
    logo: {
     height: "35px",
     width: "132.09px",
     color: "black",
     cursor: "pointer",
     padding:'20px'
   },

 })
export const FooterItems = () => {
    const classes=useStyles();
  return <Grid container  flexDirection={'row'}  paddingX={1} paddingY={5} columnSpacing={10}>
  <Grid item >
      <Box component='img' src={logo} sx={{margin:'10px'}} classes={classes.logo}/>
      <Typography variant="subtitle1">Big Ideas in small packages </Typography>
      <Typography variant="subtitle1">Start learning now</Typography>
  </Grid>
  <Grid item  sx={{margin:'16px 0px'}}>
  <Typography variant="body1" >Editorial</Typography>
      <Typography variant="body2" >Book lists</Typography>
      <Typography variant="body2" >What is Nonfiction?</Typography>
      <Typography variant="body2" >What to read next?</Typography>
      <Typography variant="body2" >Benefits of reading</Typography>
      <Typography variant="body2" >Benefits of reading</Typography>
  </Grid>
  <Grid item  sx={{margin:'16px 0px'}}>
  <Typography variant="body1" >Editorial</Typography>
      <Typography variant="body2" >Book lists</Typography>
      <Typography variant="body2" >What is Nonfiction?</Typography>
      <Typography variant="body2" >What to read next?</Typography>
      <Typography variant="body2" >Benefits of reading</Typography>
     
  </Grid>
  <Grid item  sx={{margin:'16px 0px'}}>
   <Typography variant="body1" >Useful links</Typography>
      <Typography variant="body2" >Pricing</Typography>
      <Typography variant="body2" >Blinkist business</Typography>
      <Typography variant="body2" >Gift cards</Typography>
      <Typography variant="body2" >Blinkist magaine</Typography>
      <Typography variant="body2" >Contact & help</Typography>

  </Grid>
  <Grid item  sx={{margin:'16px 0px'}}>
   <Typography variant="body1" >Company</Typography>
      <Typography variant="body2" >About</Typography>
      <Typography variant="body2" >Careers</Typography>
      <Typography variant="body2" >partners</Typography>
      <Typography variant="body2" >Code of Conduct</Typography>


  </Grid>
</Grid>;
};

export default FooterItems;