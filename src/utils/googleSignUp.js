import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";

import { AccountNavbar } from "../components";



//  const onSuccess = (res) => {
//     console.log('success:', res);
// };
// const onFailure = (err) => {
//     console.log('failed:', err);
// };

// export default function GoogleSignUp(){
//     useEffect(() => {
//         const initClient = () => {
//               gapi.client.init({
//               clientId: clientId,
//               scope: ''
//             });
//          };
//          gapi.load('client:auth2', initClient);
//      });
// return (
//    <GoogleLogin
//       clientId={clientId}
//       buttonText="Sign in with Google"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy={'single_host_origin'}
//       isSignedIn={true}
//   />
// );
// }

// export default function GoogleSignUp(){

//     const handleFailure = (failure)  => {
//         console.log(failure);
//     }

//     // const handleLogin = async (googleData) => {
//     //     const res = await fetch('/api/google-login', {
//     //         method: 'POST',
//     //         body: JSON.stringify({
//     //             token:googleData.tokenId,
//     //         }),
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //     });

//     //     console.log("Login success"+ googleData)

//     //     const data = await  res.json();
//     //     setLoginData(data);
//     //     localStorage.setItem('loginData', JSON.stringify(data));
//     // };

//     function handleLogin(googleData){
//     // const res =  axios({
//     //     method: 'post',
//     //     baseUrl: 'http://127.0.0.1:5000',
//     //     url: '/api/google-login',
//     //     body: JSON.stringify({
//     //         token:googleData.tokenId,
//     //     }),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     // })
//     const res = axios.post('/api/google-login', {
//         token:googleData.tokenId,
//     })
//     .then(()=> {  setLoginData(res);
//             localStorage.setItem('loginData', JSON.stringify(res));
//     }
//     )
//     }

//     const handleLogout =()=>{
//         localStorage.removeItem('loginData');
//         setLoginData(null);
//     }

// const [loginData, setLoginData] = useState(
//     localStorage.getItem('loginData')
//     ? JSON.parse(localStorage.getItem('loginData'))
//     :null
// );

//  return(
//     <div>
//         {loginData? (
//             <div>
//                 <h3>You are logged in as {loginData.email}</h3>
//                 <button onClick={handleLogout}>Logout</button>
//             </div>
//         ): (
//             <GoogleLogin
//             clientId={clientId}
//             buttonText="Sign in with Google"
//             onSuccess={handleLogin}
//             onFailure={handleFailure}
//             cookiePolicy={'single_host_origin'}
//             isSignedIn={true}
//             />
//             )}
//     </div>
//  )

function GoogleSignUp() {
    const clientId =
  "1021494006698-sqeueebo1j4bnv3dmh4gbmmk08qks1g5.apps.googleusercontent.com";
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  


  const checkIfLoggedIn = async () => {
    const loginData = await localStorage.getItem("loginData");
    if (loginData) {
      setIsLoggedIn(true);
      AccountNavbar(isLoggedIn);
    }
  };
  useEffect(() => {
    checkIfLoggedIn();
  });

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    localStorage.setItem("loginData", JSON.stringify(res.profileObj));
    AccountNavbar(isLoggedIn);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
    console.log(res)
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setIsLoggedIn(false);
    localStorage.removeItem("loginData");
    console.log("logout success");
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId="1021494006698-sqeueebo1j4bnv3dmh4gbmmk08qks1g5.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId="1021494006698-sqeueebo1j4bnv3dmh4gbmmk08qks1g5.apps.googleusercontent.com"
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
          isLoggedIn={false}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}

export default GoogleSignUp;


// const GoogleSignUp = () => {
    
// // Handling the response from Google
      
// const handleLogin = async googleData => {
//     const res = await fetch("/api/v1/auth/google", {
//         method: "POST",
//         body: JSON.stringify({
//         token: googleData.tokenId
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     const data = await res.json()
//     // store returned user in a context?
//   }

//   const handleLoginFailure = (res) => {
//         console.log("Login Failed:", res);
//     };
  
//   return (
//     <>
//     <GoogleLogin
//     clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//     buttonText="Sign in with Google"
//     className="ct-button ct-button--secondary"
//     onSuccess={handleLogin}
//     onFailure={handleLoginFailure}
//     cookiePolicy="single_host_origin"/>
//     </>
//   )
// }

// export default GoogleSignUp
