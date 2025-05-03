import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const router = useRouter(); // Initialize useRouter

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5225/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Login failed:', error);
                alert('Login failed: Invalid email or password');
                return;
            }

            const data = await response.json();
            console.log('Token received:', data.token);

            // Save token
            document.cookie = `token=${data.token}; path=/; secure`;
            alert('Login successful!');

            // Redirect to the home page
            router.push('/'); // Use router.push to navigate to the home page
        } catch (err) {
            console.error('Error logging in:', err);
            alert('An error occurred while logging in.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Log In
                </button>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up here</a>
                </p>
            </form>
        </>
    );
};

export default LoginForm;