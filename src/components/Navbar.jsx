import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import {logo} from '../utils/constants';
import {AccountNavbar} from './';


const Navbar = () => (
      <Stack 
      direction="row" 
      alignItems="center" 
      p={2} sx={{ position: 'sticky', background:'#fff', top: 0, 
      justifyContent: 'space-between'}}>

        <Link to="/" style={{ display:'flex', alignItems:'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        
        <AccountNavbar />
      </Stack>
    
  );

export default Navbar