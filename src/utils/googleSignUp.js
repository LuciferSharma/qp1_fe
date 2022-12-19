import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';


const clientId = "1021494006698-sqeueebo1j4bnv3dmh4gbmmk08qks1g5.apps.googleusercontent.com";



/*
 const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};

export default function GoogleSignUp(){
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });
return (
   <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
  />
);
}
*/
export default function GoogleSignUp(){


    const handleFailure = (failure)  => {
        console.log(failure);
    }

    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token:googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        console.log("Login success"+ googleData)

        const data = await  res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };

    const handleLogout =()=>{
        localStorage.removeItem('loginData');
        setLoginData(null);
    }
    
const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    :null
);

 return(
    <div>
        {loginData? (
            <div>
                <h3>You are logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ): (
            <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
            )}
    </div>
 )


       
}