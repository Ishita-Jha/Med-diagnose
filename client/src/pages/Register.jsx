import React, { useState } from 'react';
import '../styles/Register.css';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   medicalCollege: '',
  //   yearOfStudy: '',
  //   specialtyInterest: ''
  // });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    medicalCollege: '',
    specialtyInterest: '',
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch("https://med-diagnose-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          text: `Welcome, Dr. ${formData.fullName}! Registration Successful.`,
          type: "success",
        });

        setFormData({
          fullName: "",
          medicalCollege: "",
          yearOfStudy: "",
          specialtyInterest: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {
        setMessage({
          text: data.message,
          type: "error",
        });
      }

    } catch (error) {
      console.error(error);

      setMessage({
        text: "Unable to connect to the server.",
        type: "error",
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Med-diagnose</h1>
        <p className="subtitle">Set up your Student Doctor Practice Account</p>

        <form onSubmit={handleSubmit} className="register-form">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="e.g., Dr. Jane Doe"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm password"
            />
          </div>

          <div className="input-group">
            <label>Medical College / University</label>
            <input
              type="text"
              name="medicalCollege"
              value={formData.medicalCollege}
              onChange={handleChange}
              required
              placeholder="e.g., LHMC, MAMC, AIIMS"
            />
          </div>


          <div className="form-row">
            {/* <div className="input-group standard-width">
              <label>Year of Study</label>
              <select
                className="custom-select"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleChange} required>
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="Final Year">Final Year</option>
                <option value="Intern / Resident">Intern / Resident</option>
              </select>
            </div> */}

            <div className="input-group standard-width">
              <label>Specialty Focus</label>
              <select
                className="custom-select"
                name="specialtyInterest"
                value={formData.specialtyInterest}
                onChange={handleChange} required>
                <option value="">Select Specialty</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Emergency Medicine">Emergency Medicine</option>
              </select>
            </div>
          </div>

          <button type="submit" className="register-btn">Proceed to Login</button>
        </form>

        {message.text && (
          <div className={`alert-message ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;