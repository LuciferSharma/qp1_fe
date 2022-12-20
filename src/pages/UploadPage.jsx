import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress, Box, Paper  } from '@material-ui/core';
import axios from 'axios';
import CloudUpload from '@mui/icons-material/CloudUpload';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(2),
  },
  progress: {
    width: '100%',
  },
}));

export default function FileUpload() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);

    // Send the form data to your server using an HTTP library like axios
    axios.post('/api/upload', formData, {
      onUploadProgress: (event) => {
        setProgress((event.loaded / event.total) * 100);
      },
    })
      .then(() => {
        setFile(null);
        setError(null);
        setProgress(0);
      })
      .catch(() => {
        setError('An error occurred while uploading the file');
      });
  };

  return (
    <div className={classes.root}>
      <Box sx={{p:"200px"}} >
      <Paper elevation={12} style={{ padding:100}}>
      
      <input
        accept="video/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" 
        component="span" className={classes.button} startIcon={<CloudUpload />}> 
          Select video
        </Button>
      </label>
      {error && <p>{error}</p>}
      {progress > 0 && (
        <LinearProgress
          className={classes.progress}
          variant="determinate"
          value={progress}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        disabled={!file}
        onClick={handleUpload}
      >
        Upload
      </Button>
      
      </Paper>
      </Box >
    </div>
  );
}
