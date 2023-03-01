import React,{useCallback,useState} from 'react';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
} from 'reactjs-social-login';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
const redirect_url = "https://tiny-bird-36835.botics.co/";

const App = () => {
  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);
  return (
    <div className="App">
      <LoginSocialFacebook
          appId="450929960465142"
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLoginStart={onLoginStart}
          redirect_uri={redirect_url}
          onResolve={(response) => {
            console.log("response",response)
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      <LoginSocialGoogle
          client_id="968378738153-bgi29e57md0mgl2u4nrqau1ksvdre34s.apps.googleusercontent.com"
          onLoginStart={onLoginStart}
          redirect_uri={redirect_url}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={(response) => {
            console.log("response",response)
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
    </div>
  );
};

export default App;
