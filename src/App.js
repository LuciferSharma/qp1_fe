import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, SignUpCard, UploadCard} from './components';
import {Box,Stack, TextField} from '@mui/material';
import FileUpload from './pages/UploadPage';

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#E8E8EE'}}>

      <Navbar />
      <Routes>
        <Route path="/" exact element={<SignUpCard/>} />
        <Route path="/upload/:id" element={<FileUpload/>} />
      </Routes>
    </Box>
  
  </BrowserRouter>
);

export default App
