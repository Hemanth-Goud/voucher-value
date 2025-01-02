// src/Components/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:3000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Chat</h1>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            {messages.map((msg, index) => (
              <div key={index} className="alert alert-secondary" role="alert">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="btn btn-primary" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
