import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Here you would integrate with backend or Web3 message
  };

  return (
    <section className="py-16 px-4 md:px-16" id="contact">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact Me</h2>
        <div className="mb-4">
          <a href="mailto:ahmed.Seddik.ds@gmail.com" className="text-blue-400 hover:underline mr-4">Email</a>
          <a href="https://linkedin.com/in/ahmed-Seddik07" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mr-4">LinkedIn</a>
          <a href="https://github.com/ahmed-Seddik07" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
        </div>
        <form className="bg-gray-800 rounded-lg p-6 shadow" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-3 py-2 rounded bg-gray-900 text-white" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">Send Message</button>
          <button type="button" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow ml-4" disabled>Send via Web3 (coming soon)</button>
        </form>
        {sent && <div className="mt-4 text-green-400">Thank you! Your message has been sent.</div>}
      </motion.div>
    </section>
  );
};

export default Contact;
