import {Stack, Box,Card, CardHeader,CardMedia,CardContent, CardActions,Typography} from '@mui/material';
import {Link} from 'react-router-dom';

import React from 'react'
import Images from '../utils/constants';

const SignUpCard = () => (
    <Box height={500} p={20}>
        <Stack direction="row" alignItems="center" p={20} height="100px" sx={{ 
        position: 'sticky', background:'#fff',
         justifyContent: 'space-between'}}>
        <Box 
            component="img"
            src={Images.imgs.signupImg}
            alt="signup img"
            sx={{ display:'flex', alignItems:'center' }}>
                
            </Box>
        <Box sx={{ display:'flex', alignItems:'center' }}>
            <h1>sign up btn</h1>
        </Box>
    </Stack>
        <Card>
            <CardContent >
                <div style={{position: 'relative'}} >
                <CardMedia component="img" height="500" image={Images.imgs.signupImg} alt="signup img" />      
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          size: '20px',
                          top: 30, 
                          left: '50%', 
                          transform: 'translateX(-50%)'
                        }} >Your text sadcdsvc</div>
                        </div>
            </CardContent>
        </Card>
    </Box>
  );

export default SignUpCard