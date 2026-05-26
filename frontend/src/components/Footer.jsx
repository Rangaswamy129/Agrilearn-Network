import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="main-footer-wrapper">
      <div className="footer-overlay-container">
        
        {/* Section 1: Brand Title Header */}
        <div className="footer-brand-section">
          <h2 className="footer-logo-text">AgriLearnNetwork</h2>
        </div>

        {/* Section 2: Rounded Social Icons Media Bar */}
        <div className="footer-socials-group">
          <p className="socials-label">Follow us on our socials:</p>
          <div className="socials-icons-row">
            <a href="mailto:info@agrilearnnetwork.com" className="social-badge" aria-label="Email">
              ✉
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-badge" aria-label="Instagram">
              📸
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="social-badge" aria-label="X">
              𝕏
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-badge" aria-label="Facebook">
              📘
            </a>
          </div>
        </div>

       

        {/* Section 4: Compliance & Copyright Metadata Row */}
        <div className="footer-bottom-meta">
          <p className="copyright-text">
            Copyright © 2026 by AgriLearnNetwork | All Rights Reserved
          </p>
          <div className="legal-links">
            <Link to="/terms">Terms and Conditions</Link>
            <span className="divider">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;