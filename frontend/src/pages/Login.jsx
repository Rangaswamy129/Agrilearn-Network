import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      // 1. Store the authentication token
      localStorage.setItem("authToken", response.data.token);

      // 2. Store the user object details returned by your backend auth controller
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // 3. Dispatch the custom event to instantly notify Navbar to render the User Icon & Dropdown Menu
      window.dispatchEvent(new Event("authChange"));

      alert("Login Successful");
      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message || "Invalid Email or Password"
      );
    }
  };

  return (
    <div className="auth-viewport-wrapper">
      {/* Brand logo in top left corner */}
      <div className="auth-brand-corner" onClick={() => navigate("/")}>
        <span className="brand-icon">⬢</span> AgriLearnNetwork
      </div>

      {/* Main Elevated Premium Card Container */}
      <div className="auth-glass-card">
        {/* Top Header Floating Arrow/Icon Indicator */}
        <div className="auth-header-badge">
          <span className="badge-arrow">➔</span>
        </div>

        <h1 className="auth-main-title">Sign in with email</h1>

        <p className="auth-subtitle">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        {/* Login Form */}
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <span className="input-field-icon">✉</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
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

          <div className="forgot-password-row">

<button
type="button"
className="forgot-link forgot-btn"
onClick={() => navigate("/forgot-password")}
>

Forgot password?

</button>

</div>

          <button type="submit" className="auth-primary-submit">
            Login
          </button>
        </form>

        {/* Separator Line Grid Layout */}
        <div className="auth-divider-row">
          <span className="divider-line"></span>
          <span className="divider-text">Or sign in with</span>
          <span className="divider-line"></span>
        </div>

        {/* Social Authentication Badges Row */}
        <div className="auth-socials-row">
          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign in with Google"
          >
            <span className="google-icon">G</span>
          </button>

          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign in with Facebook"
          >
            <span className="facebook-icon">📘</span>
          </button>

          <button
            type="button"
            className="social-oauth-btn"
            aria-label="Sign in with Apple"
          >
            <span className="apple-icon"></span>
          </button>
        </div>

        {/* Bottom Switcher Footer Link */}
        <div className="auth-toggle-footer">
          <p>
            Don't have an account?
            <Link to="/register" className="toggle-view-link">
              {" "}Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;