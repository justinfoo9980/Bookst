import React, { useState } from "react";
import axios from "axios";
const error = "Error loggin in";
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData); //testing if data format is correct
      const response = await axios.post(
        "https://calm-mountain-10484-296975bbfc99.herokuapp.com/auth",
        formData
      );
      console.log("Login successful:", response.data);
      // Store the token and redirect
      const token = response.data.token;
      localStorage.setItem("token", token);

      // try to see if token is captured successful anot
      console.log("Login Successful:", token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>} {/* Display error message if present */}
    </form>
  );
}

export default Login;
