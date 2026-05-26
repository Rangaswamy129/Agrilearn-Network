import React from "react";
import "../styles/legal.css";

const Privacy = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-content-card">
        <h1 className="legal-title">Privacy <span>Policy</span></h1>
        <p className="legal-last-updated">Last Updated: May 24, 2026</p>
        
        <div className="legal-text-body">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal data that you intentionally submit to us, including your Full Name, Email Address, 
              Phone Number, and billing coordinates when executing a product checkout or contact inquiry form request.
            </p>
          </section>

          <section>
            <h2>2. How We Use Your Data</h2>
            <p>
              Your personal information is used exclusively to streamline service delivery, dispatch purchased 
              agricultural goods, verify security authenticity, and respond to technical customer feedback submissions.
            </p>
          </section>

          <section>
            <h2>3. Cookies and Analytics</h2>
            <p>
              We utilize minor data storage cookies to maintain smooth authentication persistence across pages, remember 
              items in your product shopping cart state, and analyze broad platform traffic patterns via automated telemetry.
            </p>
          </section>

          <section>
            <h2>4. Information Protection</h2>
            <p>
              We do not sell, rent, or lease your user profile information to outside marketing firms. All transactional 
              payment details processed through our checkout portal are fully isolated and shielded via encrypted networking layers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;