import { AppBar, Box, Menu, IconButton, Toolbar, Button,Container} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

import ExploreMenu from "../../molecules/Menu/ExploreMenu";
import logo from '../../assets/logo.png';

const useStyles = makeStyles({
 
  buttonStyle: {
    textTransform: "none",
    border: "none",
    textDecoration:'none',
    color:' #03314B',
    fontWeight:700,
    fontStyle:'normal',
    fontFamily: "raleway",
    fontSize: "16px",
    "&:hover": {
      borderBottom: "#00C263",
    }},
  logo: {
    cursor: "pointer",
  }
});

export const NavBar = () => {
  const classes = useStyles();

  const [icon, setIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setIcon(false);
    setAnchorEl(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIcon(true);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Container>
<Box maxWidth={1050}>
      <AppBar position='static' elevation={0} data-testid='nav-bar'>
        <Toolbar>
    
            <Box component='img' src={logo} className={classes.logo} />


          <Box sx={{ marginLeft: "25px", fontSize: "30px" }}>
            <IconButton sx={{ fontSize: "30px" }} data-testid='search-icon'>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ marginLeft: "25px" }}>
            <Button
              children='Explore'
              onClick={openMenu}
              endIcon={icon === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                borderBottom:
                  icon === true
                    ? "2px solid #00C263 "
                    : "2px solid transparent",
              }}
              data-testid='explore-btn'
            />
          </Box>

          <Box sx={{ marginLeft: "25px", flexGrow: 1 }}>
            <Link
              children='My Library'
              to="/library"
              className={classes.buttonStyle}
            />

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button children='Account' endIcon={<ExpandMoreIcon />} />
          </Box>
        </Toolbar>
        <Menu
          marginThreshold={0}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
          PaperProps={{
            style: {
              width: "100%",
              maxWidth: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#F1F6F4",
              boxShadow: "0 0 0",
            },
          }}
        >
          <ExploreMenu handleMouseOut={handleClose} />
        </Menu>
      </AppBar>
    </Box>
    </Container>
  );
};

export default NavBar;