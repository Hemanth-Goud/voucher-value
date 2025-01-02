import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to="/voucher-detail">Voucher Detail</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/voucher-expiry">Voucher Expiry Management</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/trade-exchange">Trade Exchange</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/profile">User Profile Dashboard</Link> {/* Corrected path */}
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/chat">Chat</Link> {/* Corrected path */}
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/advanced-search">Advanced Search Filtering</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/settings">Settings</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/signup">Sign Up</Link> {/* Corrected casing */}
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/">Login</Link> {/* Link to the Login page */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
