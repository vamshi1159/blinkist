import * as React from "react";

import { Box,  Container,Typography } from "@mui/material";
import { FooterItems } from "./FooterItems";
import CopyrightIcon from '@mui/icons-material/Copyright';




export const Footer = () => {

  return   <Box position={'relative'} bottom={0}   bgcolor={'#F1F6F4'} sx={{width:'100%'}}>
      <Container sx={{left:'250px'}} >
          <FooterItems/>
        <Box  sx={{display:'flex',padding:'20px'}}>
           
            <CopyrightIcon sx={{ color:' #737270',}}/>
            <Typography variant="body2" >
             Blinkist2021  SiteMap  | Imprint | Terms Of Service |  Privacy Policy
            </Typography></Box>
      </Container>
  </Box>


      ;
};

export default Footer;




