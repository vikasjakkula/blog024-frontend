// Import necessary dependencies
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

// Contact component - handles the contact form and information
const Contact = () => {
  // State to manage form data and toast visibility
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',     // Replace with your Service ID from EmailJS
      'YOUR_TEMPLATE_ID',    // Replace with your Template ID from EmailJS
      {
        user_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'      // Replace with your Public Key from EmailJS
    )
    .then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setFormData({ email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  // Inline style for Raleway font
  const ralewayFont = { fontFamily: "'Raleway', sans-serif" };

  return (
    // Main container for the contact page
    <div className="contact" style={ralewayFont}>
      {/* Toast notification */}
      {showToast && (
        <div className="toast" style={ralewayFont}>
          <span className="toast-icon">✅</span>
          Message Sent Successfully!
        </div>
      )}
      <h1 style={ralewayFont}>Contact Me ❤️‍🔥</h1>
      <div className="contact-container" style={ralewayFont}>
        {/* Contact information section */}
        <div className="contact-info" style={ralewayFont}>
          <h2 style={ralewayFont}>Get in Touch</h2>
          <p style={ralewayFont}>I'd love to hear from you. Please fill your opinion out there through X or Reddit</p>
          {/* Contact details */}
          <ul style={ralewayFont}>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:vikasjakkula08@gmail.com" style={ralewayFont}>vikasjakkula08@gmail.com</a>
            </li>
            <li>
              <strong>Social Media</strong>
              <ul style={ralewayFont}>
                <li>
                  X (Twitter):{' '}
                  <a
                    href="https://twitter.com/vikas_070v"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ralewayFont}
                  >
                    @vikas_070v
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a
                    href="https://github.com/vikasjakkula"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ralewayFont}
                  >
                    github.com/vikasjakkula
                  </a>
                </li>
                <li>
                  Reddit:{' '}
                  <a
                    href="https://www.reddit.com/user/Relevant_Whole2540"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ralewayFont}
                  >
                    u/Relevant_Whole2540
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Contact form section */}
        <form className="contact-form" onSubmit={handleSubmit} style={ralewayFont}>
          {/* Email input field */}
          <div className="form-group" style={ralewayFont}>
            <label style={ralewayFont}>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={ralewayFont}
            />
          </div>
          {/* Message textarea */}
          <div className="form-group" style={ralewayFont}>
            <label style={ralewayFont}>Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              style={ralewayFont}
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-btn" style={ralewayFont}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 