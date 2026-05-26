import React from "react";
import "../styles/legal.css"; // We will create a shared stylesheet for clean maintenance

const Terms = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-content-card">
        <h1 className="legal-title">Terms & <span>Conditions</span></h1>
        <p className="legal-last-updated">Last Updated: May 24, 2026</p>
        
        <div className="legal-text-body">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to AgriLearnNetwork. By accessing or using our platform, website, and services, 
              you agree to comply with and be bound by these Terms and Conditions. Please review them carefully.
            </p>
          </section>

          <section>
            <h2>2. Intellectual Property</h2>
            <p>
              All content, modules, logos, graphics, and agricultural knowledge systems hosted on this 
              network are the exclusive property of AgriLearnNetwork. Unauthorized replication, distribution, 
              or scraping of this data is strictly prohibited.
            </p>
          </section>

          <section>
            <h2>3. User Accounts & Commerce</h2>
            <p>
              When purchasing agricultural products or creating an account, you agree to provide completely 
              accurate and up-to-date data. We reserve the right to suspend or terminate accounts that provide 
              fraudulent or misleading information.
            </p>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              Our learning materials and platform utilities are designed for general informational and educational 
              advancement. AgriLearnNetwork is not liable for specific crop yield deficiencies or equipment failures 
              resulting from the experimental execution of platform concepts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;