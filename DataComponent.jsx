import React, { useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to the backend
        axios.post('http://localhost:3001/store-data', {
            email: email,
            password: password
        })
        .then(response => {
            console.log('Data stored successfully:', response.data);
        })
        .catch(error => {
            console.error('Error storing data:', error);
        });
    };

    return (
        <div>
            <h1>Store Data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DataComponent;
