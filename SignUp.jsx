import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle signup logic here
        setIsAuthenticated(true);
        console.log('Signup:', email, password);
        alert('Signup successful!');
        navigate('/home');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Signup</h2>
            <form onSubmit={handleSignUp} className="form-signup">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="chintu@gmail.com"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        className="form-control"
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
                        title="Must be at least 8 characters long and include at least one special character."
                        placeholder="Chintu@07"
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Signup</button>
            </form>
            <style>
                {`
                    .container {
                        max-width: 500px;
                    }

                    .text-center {
                        margin-bottom: 20px;
                    }

                    .form-signup {
                        background-color: #f8f9fa;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    .btn-block {
                        display: block;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default SignUp;
