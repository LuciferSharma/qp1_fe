import axios from 'axios';


// AssemblyAI headers
const assemblyApi= axios.create({
    baseURL: 'https://api.assemblyai.com/v2',
    headers: {
      authorization: "1d50d21098674ffaaca0a19607874ef9",
      'content-type': 'application/json',
    },
  });
  
  // initial state of the file 
  const initialState ={
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h:0,
      m:0,
      s:0,
    }
  }

  function FetchFromAPI() {

  const [audioDetails, setAudioDetails] = useState(initialState);
  
  }