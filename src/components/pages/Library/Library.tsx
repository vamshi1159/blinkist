import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import StatusTab from '../../organisms/StatusTab/StatusTab';

export const Library = () => {
  return <Container >
      <Box minHeight={600}>
        <Typography variant='h1' sx={{color:'#03314B'}}>
            My Library
        </Typography>
        
        <StatusTab/>
  </Box>
  </Container>;
};

export default Library;