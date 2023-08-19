import React from 'react';
import Logo from '../assets/nexus-logo-blue.svg';
import '../styles/LoadingSpinner.scss';

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className='logo-and-spinner'>
        <img src={Logo} alt="Nexus Logo" className="logo" />
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
