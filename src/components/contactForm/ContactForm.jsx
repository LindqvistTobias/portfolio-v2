import React, { useState } from 'react';
import axios from 'axios';
import "./ContactForm.css"
import Button from "../button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/.netlify/functions/sendEmail', formData);
      if (response.data.status === 'success') {
        alert('Thanks for wanting to know more about me. I will be in touch. Have a great day!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <div className="form-container">      
      <form onSubmit={handleSubmit}>        
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <Button className="contact-button" type="submit">Send Message</Button>
    </form>
    </div>
  );
};

export default ContactForm;
