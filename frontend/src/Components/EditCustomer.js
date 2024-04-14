import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditCustomer() {
  const [formData, setFormData] = useState({ email: '', username: '' });

  useEffect(() => {
    // Fetch current user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://calm-mountain-10484-296975bbfc99.herokuapp.com/user/customers', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setFormData({ email: response.data.email, username: response.data.username });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('https://calm-mountain-10484-296975bbfc99.herokuapp.com/user/customers', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default EditCustomer;
