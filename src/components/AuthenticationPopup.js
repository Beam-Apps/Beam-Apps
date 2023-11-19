import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './UpdateForm.css';

const AuthenticationPopup = ({ onClose }) => {
  const { loginWithRedirect } = useAuth0();

  const handleAuthenticate = () => {
    // Redirect to Auth0 login page
    loginWithRedirect();
    onClose();
  };

  return (
    <div className="authentication-popup">
      <div className="popup-content">
        <p>Click the button to authenticate!</p>
        <button onClick={() => loginWithRedirect()} style={{marginLeft: '70px'}}>Log In</button>
      </div>
    </div>
  );
};

export default AuthenticationPopup;

// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import './UpdateForm.css';

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;