import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, SignUpCard, UploadCard} from './components';
import {Box,Stack, TextField} from '@mui/material';

const App = () => (
  <BrowserRouter>
      <Navbar />
  
    <Box sx={{backgroundColor:'#E8E8EE'}}>
      <SignUpCard/>
    </Box>
  
  </BrowserRouter>
);

export default App
