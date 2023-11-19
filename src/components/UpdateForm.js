import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationPopup from './AuthenticationPopup';
import './UpdateForm.css';
import LoginButton from './AuthenticationPopup';

const UpdateForm = ({ onSubmit }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [download, setDownload] = useState('');
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [version, setVersion] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  const handleAuthenticate = () => {
    // If not authenticated, show Auth0 login popup
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      setIsPopupVisible(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if authenticated before submitting
    if (isAuthenticated) {
      onSubmit({ download, name, icon, version, category, size });
      setDownload('');
      setName('');
      setIcon('');
      setVersion('');
      setCategory('');
      setSize('');
    } else {
      alert('Authentication required. Please log in.');
    }
  };
  

  return (
    <div className="form-container">
      {isPopupVisible && (
        <AuthenticationPopup onClose={handlePopupClose} onAuthenticate={handleAuthenticate} />
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Download Link:
          <input type="text" value={download} onChange={(e) => setDownload(e.target.value)} />
        </label>
        <label>
          App Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Icon Link:
          <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
        </label>
        <label>
          Version:
          <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Size:
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
        </label>
        <button type="submit">Send it!</button>
      </form>

      <div>
        <p>You can add things here!</p>
      </div>
    </div>
  );
};

export default UpdateForm;