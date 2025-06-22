import React, { useState } from 'react';
import axios from '../axiosConfig';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', form); // Make sure your backend handles this route
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setError('');
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="success">Thank you! I’ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </section>
  );
};

export default Contact;
