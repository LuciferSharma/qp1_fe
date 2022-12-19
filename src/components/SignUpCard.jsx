import {Stack,Grid,Paper, Avatar, TextField,Checkbox,Button,FormControlLabel, Box,Card, CardHeader,CardMedia,CardContent, CardActions,Typography} from '@mui/material';
import {Link} from 'react-router-dom';

import React from 'react'
import Images from '../utils/constants';
import signupImg from '../assets/images/signupimg.png'
import GoogleSignUp from '../utils/googleSignUp';
import { width } from '@mui/system';

const SignUpCard = () => (
    <Stack p={20} width="600px" alignItems="center" >
        
        
        <Grid item xs={12} sm={8} md={5} component={Card} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box component='img' src={Images.imgs.signupImg} 
            sx={{
                
                width: 350,
                
                }}>

            </Box>
            
        
            <Box component="form" noValidate  sx={{ mt: 1 ,p:3 }} alignItems="center" >

              <div position="relative">
              <GoogleSignUp />
              </div>

              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      
    </Stack>
  );

export default SignUpCard