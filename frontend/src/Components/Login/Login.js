import React, { useState, useEffect } from "react";
import axios from "axios";
const error = "Error loggin in";
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginMessage, setLoginMessage] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log("Token value:", storedToken);
      // If token exists, redirect to dashboard or any other authenticated route
      // Example: history.push("/dashboard");
    }
  }, []);
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

      const userResponse = await axios.get(
        "https://calm-mountain-10484-296975bbfc99.herokuapp.com/users/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = userResponse.data;
      setUserName(user.name);

      // Set login message
      setLoginMessage(`Login successful. Welcome, ${user.name}.`);
      // Reset error message
      setError("");
      console.log("Login successful:", user);

      // try to see if token is captured successful anot
      console.log("Login Successful:", token); //delete later
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginMessage("Error logging in. Please try again.");
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
      {error && <p>{error}</p>} {""}
      {loginMessage && <p>{loginMessage}</p>}{" "}
      {/* Display login message if present */}
    </form>
  );
}

export default Login;
