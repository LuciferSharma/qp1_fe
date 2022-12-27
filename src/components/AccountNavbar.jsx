import React, { useEffect } from 'react'
import {Stack,Grid,Paper,Menu, MenuItem, Avatar,IconButton, TextField,Checkbox,Button,FormControlLabel, Box,Card, CardHeader,CardMedia,CardContent, CardActions,Typography} from '@mui/material';
import { GoogleLogin,GoogleLogout } from 'react-google-login';



const AccountNavbar = (loginStatus) => {

  const [isLoggedIn, setIsLoggedIn] = React.useState(loginStatus);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const checkIsLoggedIn = async () => {
    const loginData = await localStorage.getItem('loginData');
    if(loginData){
      setIsLoggedIn(true)
    }
  }
  useEffect(()=>{
    checkIsLoggedIn()
  })
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
      const handleClose = () => {
        setIsLoggedIn(false)
        setAnchorEl(null);
      };

    let resp = null;
    if(JSON.parse(localStorage.getItem('loginData')) != null){
         resp = JSON.parse(localStorage.getItem('loginData'));
         
    }
    console.log(resp);

    if(resp != null){
      return(<>
        <p>{resp.email}</p>
            <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            aria-label="Open to show more"
            title="Open to show more"
            >
            <Avatar src={resp.imageUrl}>
            </Avatar>
            </IconButton>
    
            <Menu 
            id="simple-menu"
            
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {isLoggedIn ? <MenuItem onClick={handleClose} sx={{}}>
                <Avatar src={resp.imageUrl} /> 
                <Typography variant='h6' sx={{fontWeight:'bold'}} >{resp.givenName}</Typography>
            </MenuItem>:null}
            <MenuItem onClick={handleClose}>
                {isLoggedIn?<GoogleLogout/>:<GoogleLogin/> }
            </MenuItem>
          </Menu>
        </>  
        )
    }else{
      return(<>
        <GoogleLogin/>
      </>)
    }
    
}

export default AccountNavbar