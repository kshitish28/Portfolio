import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_z5x528h', 'template_zy090qd', e.target, 'cH3R_P-k2tOsLt85k')
      .then((result) => {
        console.log(result.text);
        setMessage("Message sent successfully!");
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        setMessage("Error sending message.");
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;
