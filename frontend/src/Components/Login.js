import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://calm-mountain-10484-296975bbfc99.herokuapp.com/auth', formData);
      console.log('Login successful:', response.data);
      // Store the token and redirect
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
