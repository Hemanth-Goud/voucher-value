// src/Components/About.js
import React from "react";

const About = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <style>
        {`
          .card {
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
            transition: transform 0.5s ease-in-out;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
          }

          .card:hover {
            transform: rotateY(15deg) rotateX(10deg);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
          }

          .card-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #343a40;
          }

          .card-text {
            font-size: 1.25rem;
            color: #6c757d;
          }

          .card-body {
            position: relative;
            z-index: 1;
          }

          .container-fluid {
            background-color: #f8f9fa;
          }

          /* Optional: Adding a background image or color to the page */
          body {
            background-color: #f0f8ff;
            font-family: 'Arial', sans-serif;
          }
        `}
      </style>

      <div className="card shadow-lg p-5 rounded-3d">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">About Us</h1>
          <p className="card-text">
            Welcome to our platform! We provide a secure and easy-to-use service to manage your vouchers and help you get the best deals. Our team works tirelessly to create a seamless and enjoyable experience for our users.
          </p>
          <p className="card-text">
            Our goal is to help you unlock the true value of your vouchers through trade, exchange, or purchase. We focus on delivering the best customer service and innovative solutions to give you complete control over your vouchers.
          </p>
        </div>
      </div>
    </div>
  );
};

// Make sure to export it as default
export default About;
