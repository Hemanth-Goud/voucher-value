import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Login authentication logic goes here
    console.log('Login details:', { email, password });
    if (password.match(/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)) {
      setIsAuthenticated(true); // Mark as authenticated
      navigate('/home'); // Redirect to home after successful login
    } else {
      alert('Password must be at least 8 characters long and include at least one special character.');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // Redirect to SignUp page
  };

  // CSS styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Full viewport height
    },
    heading: {
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '15px',
      width: '100%',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Darker shade on hover
    },
    signUpText: {
      color: 'blue',
      cursor: 'pointer',
    },
    paragraph: {
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
            title="Must be at least 8 characters long and include at least one special character."
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.paragraph}>
        Don't have an account?{' '}
        <span
          onClick={handleSignUpRedirect}
          style={styles.signUpText}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
