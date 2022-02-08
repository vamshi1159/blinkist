import { Box, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export const SearchInput = () => {
  return <Box>
      <Input
      fullWidth={true}
      placeholder='search by title or category'
        startAdornment={
            <InputAdornment position='start'>
                <SearchIcon/>
            </InputAdornment>
        }
      />
 
  </Box>;
};

export default SearchInput;