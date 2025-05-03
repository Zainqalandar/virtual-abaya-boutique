'use client';
import React, { useState } from 'react';

const ContactForm = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: integrate API/email service
		setStatus('Your message has been sent!');
		setForm({ name: '', email: '', message: '' });
	};
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-lg mx-auto px-4">
					<h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
						Send Us a Message
					</h3>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Message
							</label>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								rows={5}
								required
								className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
						>
							Submit
						</button>
						{status && (
							<p className="mt-4 text-green-600 text-center">
								{status}
							</p>
						)}
					</form>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
