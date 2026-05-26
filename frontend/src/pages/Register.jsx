import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleRegisterSubmit = async (e) => {

    e.preventDefault();

    try {

     await axios.post(
  "http://localhost:5000/api/users/register",
  formData
      );

      alert("Account Created Successfully");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <div className="auth-viewport-wrapper">

      {/* Brand logo in top left corner */}
      <div
        className="auth-brand-corner"
        onClick={() => navigate("/")}
      >
        <span className="brand-icon">⬢</span>
        {" "}AgriLearnNetwork
      </div>

      {/* Main Elevated Premium Card Container */}
      <div className="auth-glass-card">

        {/* Top Header Floating Arrow/Icon Indicator */}
        <div className="auth-header-badge">
          <span className="badge-arrow">⎋</span>
        </div>

        <h1 className="auth-main-title">
          Create your free account
        </h1>

        <p className="auth-subtitle">
          Join our platform to start learning,
          trading, and collaborating instantly.
        </p>

        {/* Registration Form */}
        <form
          className="auth-form"
          onSubmit={handleRegisterSubmit}
        >

          <div className="input-group">

            <span className="input-field-icon">👤</span>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <span className="input-field-icon">✉</span>

            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <span className="input-field-icon">🔒</span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </button>

          </div>

          <button
            type="submit"
            className="auth-primary-submit"
          >
            Create Account
          </button>

        </form>

        {/* Separator Line Grid Layout */}
        <div className="auth-divider-row">

          <span className="divider-line"></span>

          <span className="divider-text">
            Or sign up with
          </span>

          <span className="divider-line"></span>

        </div>

        {/* Social Authentication Badges Row */}
        <div className="auth-socials-row">

          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign up with Google"
          >
            <span className="google-icon">G</span>
          </button>

          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign up with Facebook"
          >
            <span className="facebook-icon">📘</span>
          </button>

          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign up with Apple"
          >
            <span className="apple-icon"></span>
          </button>

        </div>

        {/* Bottom Switcher Footer Link */}
        <div className="auth-toggle-footer">

          <p>
            Already have an account?
            <Link
              to="/login"
              className="toggle-view-link"
            >
              {" "}Login
            </Link>
          </p>

        </div>

      </div>

    </div>

  );

};

export default Register;