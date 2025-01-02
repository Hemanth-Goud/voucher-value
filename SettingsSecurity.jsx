import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SettingsSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword.length < 8 || !/[!@#$%^&*]/.test(newPassword)) {
      alert('Password must be at least 8 characters long and include a special character.');
      return;
    }
    setLoading(true);
    // Simulate password update process
    setTimeout(() => {
      console.log('Password updated:', { currentPassword, newPassword });
      setLoading(false);
      alert('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    }, 1000);
  };

  const toggleTwoFactor = () => {
    setLoading(true);
    setTimeout(() => {
      setTwoFactorEnabled(!twoFactorEnabled);
      console.log('Two-factor authentication:', twoFactorEnabled ? 'Disabled' : 'Enabled');
      setLoading(false);
      alert(`Two-factor authentication ${twoFactorEnabled ? 'disabled' : 'enabled'} successfully!`);
    }, 500);
  };

  return (
    <div className="container mt-5">
      <h2>Settings & Security</h2>
      <div className="mb-4">
        <h4>Change Password</h4>
        <form onSubmit={handlePasswordChange}>
          <div className="form-group mb-3">
            <label>Current Password</label>
            <input
              type="password"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="At least 8 characters & a special character"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>

      <div className="mb-4">
        <h4>Two-Factor Authentication</h4>
        <button className="btn btn-secondary" onClick={toggleTwoFactor} disabled={loading}>
          {loading ? (twoFactorEnabled ? 'Disabling...' : 'Enabling...') : (twoFactorEnabled ? 'Disable' : 'Enable')} Two-Factor Authentication
        </button>
      </div>

      <div className="mb-4">
        <h4>Account Settings</h4>
        <p>Additional settings can go here, such as updating profile information or managing connected apps.</p>
      </div>
    </div>
  );
};

export default SettingsSecurity;
