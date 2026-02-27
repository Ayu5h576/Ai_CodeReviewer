import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

try {

      const response = await  axios.post(
        "http://localhost:3000/ai/signup",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server error");
      }

    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
