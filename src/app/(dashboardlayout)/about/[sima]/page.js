



'use client';

import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitAndAddToCart = (e) => {
    e.preventDefault();

    // Submit form
    console.log('Client Info:', formData);
    setSubmitted(true);

    // Add to cart logic
    console.log('Item added to cart!');
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 1500);
  };

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmitAndAddToCart}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-green-400">Connect & Add to Cart</h2>

        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="How can I help you?"
            required
          />
        </div>

        {/* 🛒 Combined Submit + Add to Cart Button */}
        <button
          type="submit"
          className={`flex items-center justify-center gap-2 w-full py-2 rounded-full transition-all duration-300 ${cartAdded ? 'bg-green-500' : 'bg-pink-500 hover:bg-pink-600'
            } text-white font-semibold`}
        >
          <FaCartPlus className={`text-lg ${cartAdded ? 'animate-bounce' : ''}`} />
          {submitted ? 'Sent & Added!' : 'Send & Add to Cart'}
        </button>
      </form>
    </div>
  );
}
  