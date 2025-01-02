import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const UserProfileDashboard = () => {
  const [user, setUser] = useState({
    name: 'Ramu',
    email: 'ramu@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Mumbai, India'
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setFormData(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleConfirmUpdate = () => {
    setUser(formData);
    setEditMode(false);
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Profile Dashboard</h1>
      {editMode ? (
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
            {errors.address && <p className="text-danger">{errors.address}</p>}
          </div>
          <button type="submit" className="btn btn-success me-2">Save</button>
          <button type="button" className="btn btn-secondary" onClick={handleEditToggle}>Cancel</button>
        </form>
      ) : (
        <div className="card shadow-lg p-4">
          <div className="card-body">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="btn btn-primary" onClick={handleEditToggle}>Edit Profile</button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Profile Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to update your profile with the following details?</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmUpdate}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .card {
          margin-top: 20px;
          border: none;
          border-radius: 10px;
        }

        .card-body {
          background-color: #f8f9fa;
          border-radius: 10px;
        }

        .form-control {
          border-radius: 5px;
        }

        .btn-success {
          background-color: #28a745;
          border-color: #28a745;
        }

        .btn-secondary {
          background-color: #6c757d;
          border-color: #6c757d;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default UserProfileDashboard;
