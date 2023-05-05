import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import {Tooltip} from '@mui/material';
import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const HandlePlacesToVisit=()=>{
    // 👇️ redirects to an external URL
    window.location.href='https://travel-companion-50.netlify.app';
}
  const HandleTrans=()=>{
      // 👇️ redirects to an external URL
      window.location.href='https://travel-companion-51.netlify.app';
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Companion
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>

          <Tooltip title='Places to visit list'>
              <button onClick={HandlePlacesToVisit} style={{
                backgroundColor: "#5C6BC0",
                opacity : 5,
                border:"none",
                borderRadius: 5 + 'px',
                cursor:'pointer',
                marginRight:'10px'
                //borderRadius: "10 px",
                }}>
                <FormatListNumberedIcon/>
              </button>
            </Tooltip>

            <Tooltip title='Translator'>
              <button onClick={HandleTrans} style={{
                backgroundColor: "#5C6BC0",
                opacity : 5,
                border:"none",
                borderRadius: 5 + 'px',
                cursor:'pointer',
                //borderRadius: "10 px",
                }}>
                <GTranslateIcon/>
              </button>
            </Tooltip>
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
            
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
