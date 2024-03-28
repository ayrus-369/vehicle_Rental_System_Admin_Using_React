import React from 'react';
import './AppHeader.css'
import profileImg from '../assets/profile.png'
const AppHeader = () => {
  const handleSignout = () => {
    // Add your signout logic here
    console.log('Signing out...');
  };

  return (
    <div className="app-header">
      
      <div className="dropdown">
        <a
          href="/"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={profileImg}
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li>
            <a className="dropdown-item" href="/adminProfile">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/" onClick={handleSignout}>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
