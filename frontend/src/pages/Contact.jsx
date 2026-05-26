import React, { useState } from "react";
import "../styles/contact.css";


const Contact = () => {
  // 1. Setup local state for all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // 2. Update state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 3. This function executes when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading refreshingly
    
    // Replace this alert with your backend API or Email service logic
    alert(`Thank you ${formData.name}! Your message has been submitted successfully.`);
    
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page-wrapper">
     

      <div className="contact-container">
        <h2 className="contact-title">
          Contact <span>Us!</span>
        </h2>

        {/* 4. Hook up the onSubmit handler directly to the form element */}
        <form className="contact-form-card" onSubmit={handleSubmit}>
          
          {/* Row 1 */}
          <div className="contact-form-row">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          {/* Row 2 */}
          <div className="contact-form-row">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject / Details" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Row 3 */}
          <div className="contact-form-row">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="8" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* 5. Ensure button type is explicitly set to "submit" */}
          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;