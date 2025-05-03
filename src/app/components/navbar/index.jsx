'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [userMenuOpen, setUserMenuOpen] = useState(false); // State for user dropdown
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'Try-On', href: '/try-on' },
		{ name: 'Shop', href: '/shop' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];
	function getTokenFromCookies() {
		const cookies = document.cookie.split(';');
		for (let cookie of cookies) {
			const [key, value] = cookie.trim().split('=');
			if (key === 'token') {
				return value;
			}
		}
		return null; // Token not found
	}

	async function logout() {
		const token = getTokenFromCookies();
		console.log('Token:', token); // Log the token to check if it's being retrieved correctly
		if (!token) {
			console.error('Token not found in cookies');
			return;
		}
	
		try {
			const response = await fetch('http://localhost:5225/api/auth/logout', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${token}`,
				}
			});
	
			if (response.ok) {
				console.log('Logout successful');
				document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
				window.location.href = '/login';
			} else {
				const text = await response.text();
				console.error('Logout failed:', text); // use text, not json
			}
		} catch (error) {
			console.error('Error during logout:', error);
		}
	}
	
	return (
		<>
			<nav className="bg-white shadow-md sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<div className="flex items-center space-x-3">
							<Link href="/" className="flex items-center">
								<Image
									src="/logo/hijab-girl-logo.png"
									alt="Logo"
									width={40}
									height={40}
								/>
								<span
									className="ml-2 text-2xl font-extrabold text-gray-800 hover:text-gray-900"
									style={{
										fontFamily: "'Playfair Display', serif",
									}}
								>
									Abaya Boutique
								</span>
							</Link>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-700 hover:text-gray-900 font-medium transition"
								>
									{item.name}
								</Link>
							))}
							<Link
								href="/store"
								className="text-gray-700 hover:text-gray-900 transition"
							>
								<ShoppingBag size={22} />
							</Link>

							{/* User Icon with Dropdown */}
							<div className="relative">
								<button
									onClick={() =>
										setUserMenuOpen(!userMenuOpen)
									}
									className="text-gray-700 hover:text-gray-900 transition"
								>
									<User size={22} />
								</button>
								{userMenuOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
										<Link
											href="/settings"
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
											onClick={() =>
												setUserMenuOpen(false)
											}
										>
											Settings
										</Link>
										{/* ...existing code... */}
										<button
											className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
											onClick={() => {
												setUserMenuOpen(false);
												logout(); // Call the logout function
											}		}
										>
											Logout
										</button>
										{/* ...existing code... */}
									</div>
								)}
							</div>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex md:hidden">
							<button
								onClick={() => setOpen(!open)}
								className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								{open ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{open && (
					<div className="md:hidden bg-white border-t border-gray-200">
						<div className="px-4 pt-4 pb-6 space-y-3">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setOpen(false)}
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition"
								>
									{item.name}
								</Link>
							))}
							<Link
								href="/store"
								onClick={() => setOpen(false)}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition flex items-center space-x-2"
							>
								<ShoppingBag size={20} /> <span>Store</span>
							</Link>
							<div className="relative">
								<button
									onClick={() =>
										setUserMenuOpen(!userMenuOpen)
									}
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition flex items-center space-x-2"
								>
									<User size={20} /> <span>Account</span>
								</button>
								{userMenuOpen && (
									<div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
										<Link
											href="/settings"
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
											onClick={() => {
												setUserMenuOpen(false);
												setOpen(false);
											}}
										>
											Settings
										</Link>
										<button
											className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
											onClick={() => {
												setUserMenuOpen(false);
												setOpen(false);
												// Add logout logic here
											}}
										>
											Logout
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
