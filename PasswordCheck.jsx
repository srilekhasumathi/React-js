import React, { useState } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password); // Check if passwords match
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Passwords match! Form submitted.');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div>
      <h2>Password Check Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {!passwordMatch && (
            <p style={{ color: 'red' }}>Passwords do not match!</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordCheck;