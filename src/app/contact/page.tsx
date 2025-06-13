'use client';

import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/xovwdbna', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formState),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">Let’s Connect</h2>
          <p className="text-gray-600">
            You can reach out via this form or contact me directly through the links below:
          </p>
          <div className="space-y-3">
            <a
              href="https://github.com/matthewOn2003"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/on-wu-xu/"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://wa.me/601111135229"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaWhatsapp /> +6011-11135229
            </a>
            <a
              href="mailto:onwuxu@e=gmail.com?subject=Let's%20Work%20Together"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition"
            >
              <FaIcons.FaEnvelope /> onwuxu@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3 font-semibold rounded-lg shadow transition ${submitted
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
