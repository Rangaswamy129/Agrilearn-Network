import React, { useState, useEffect } from "react";
import {
FaHome,
FaInfoCircle,
FaBlog,
FaShoppingCart,
FaPhoneAlt
} from "react-icons/fa";

import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false);

  // Helper function to read user authentication state safely

  const checkUserAuth = () => {

    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {

      try {

        setCurrentUser(JSON.parse(storedUser));

      } catch (error) {

        console.error("Parsing issue:", error);

        setCurrentUser(null);

      }

    } else {

      setCurrentUser(null);

    }

  };

  useEffect(() => {

    // Check auth when component mounts or location changes

    checkUserAuth();

    // Listen for custom login changes from other components

    window.addEventListener("authChange", checkUserAuth);

    return () => {

      window.removeEventListener("authChange", checkUserAuth);

    };

  }, [location]);

  const handleLogout = () => {

    localStorage.removeItem("authToken");

    localStorage.removeItem("user");

    setCurrentUser(null);

    setShowDropdown(false);

    window.dispatchEvent(new Event("authChange"));

    navigate("/login");

  };

  return (

    <nav className="main-navbar">

      {/* Logo */}

      <div
        className="nav-brand-container"
        onClick={() => navigate("/")}
      >

        <span className="brand-logo-leaf">

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.oVCPmTxlaZ9lXodwguc7cQHaHa?pid=Api&P=0&h=180"
            alt="agriculture"
            className="img"
          />

        </span>

        <span className="brand-name-text">
          AgriLearnNetwork
        </span>

      </div>

      {/* Navigation Links */}

      <ul className="nav-links-list">

        <li>

          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >

            <FaHome className="nav-icon" />

            Home

          </Link>

        </li>

        <li>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >

            <FaInfoCircle className="nav-icon" />

            About

          </Link>

        </li>

        <li>

          <Link
            to="/blogs"
            className={location.pathname === "/blogs" ? "active" : ""}
          >

            <FaBlog className="nav-icon" />

            Blogs

          </Link>

        </li>

        <li>

          <Link
            to="/buy-products"
            className={location.pathname === "/buy-products" ? "active" : ""}
          >

            <FaShoppingCart className="nav-icon" />

            Buy Products

          </Link>

        </li>

        <li>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >

            <FaPhoneAlt className="nav-icon" />

            Contact

          </Link>

        </li>

      </ul>

      {/* Login/User */}

      <div className="nav-auth-action-zone">

        {currentUser ? (

          <div
            className="user-profile-menu-wrapper"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => setShowDropdown(!showDropdown)}
          >

            <div className="user-avatar-badge">

              {currentUser.name
                ? currentUser.name.charAt(0).toUpperCase()
                : "U"}

            </div>

            {showDropdown && (

              <div className="user-dropdown-portal-card">

                <div className="dropdown-user-info-header">

                  <p className="welcome-label">
                    Signed in as
                  </p>

                  <p className="user-display-name">
                    {currentUser.name}
                  </p>

                  <p className="user-display-email">
                    {currentUser.email}
                  </p>

                </div>

                <div className="dropdown-divider"></div>

                <button
                  onClick={handleLogout}
                  className="dropdown-logout-action-btn"
                >

                  <span className="logout-icon-arrow">
                    🚪
                  </span>

                  Log Out

                </button>

              </div>

            )}

          </div>

        ) : (

          <button
            className="nav-login-redirect-btn"
            onClick={() => navigate("/login")}
          >

            Login

          </button>

        )}

      </div>

    </nav>

  );

};

export default Navbar;