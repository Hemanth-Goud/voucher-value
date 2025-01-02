import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) newErrors.email = 'Invalid email address';
    if (!message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic
      console.log('Form submitted:', { name, email, message });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <style>
        {`
          .contact-card {
            transform-style: preserve-3d;
            transition: transform 0.5s ease-in-out;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 30px;
            background-color: #fff;
          }

          .contact-card:hover {
            transform: rotateY(15deg) rotateX(10deg);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
          }

          .contact-card-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #343a40;
          }

          .contact-card-text {
            font-size: 1.25rem;
            color: #6c757d;
          }

          .form-group input, .form-group textarea {
            border-radius: 5px;
            padding: 10px;
            width: 100%;
            margin-bottom: 15px;
            border: 1px solid #ccc;
          }

          .form-group button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }

          .form-group button:hover {
            background-color: #0056b3;
          }

          .error-text {
            color: red;
            font-size: 0.875rem;
          }

          .success-message {
            color: green;
            font-size: 1.25rem;
            margin-top: 20px;
          }
        `}
      </style>

      <div className="contact-card shadow-lg">
        <h1 className="contact-card-title text-center mb-4">Contact Us</h1>
        <p className="contact-card-text text-center">
          If you have any questions or need support, please don't hesitate to reach out to us. We are here to help!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>
          <div className="form-group text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {submitted && <p className="success-message">Message sent successfully!</p>}
      </div>
    </div>
  );
};

export default Contact;
