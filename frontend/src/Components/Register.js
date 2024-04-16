import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(formData);
      const response = await axios.post(
        "https://calm-mountain-10484-296975bbfc99.herokuapp.com/users/registerUser",
        formData
      );
      console.log("Registered successfully:", response.data);
      // Redirect or handle response
      setLoading(false);
      // Redirect to login or other appropriate page
    } catch (error) {
      console.error("Error registering:", error);
      setError("Failed to register. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
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
      <button type="submit" onClick={handleSubmit} disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Register;
