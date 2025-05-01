'use client'
import React from 'react'
import { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-md mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get 10% off your first order when you subscribe!</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            // TODO: handle signup
            alert(`Thank you, ${email}!`);
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSignup