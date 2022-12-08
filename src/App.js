import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar} from './components';
import {Box, TextField} from '@mui/material';

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:"#E8E8EE"}}>
      <h1>hey</h1>
      <Navbar />
    </Box>
  </BrowserRouter>
);

export default App
