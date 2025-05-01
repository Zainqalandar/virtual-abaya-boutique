'use client';
import { useState } from 'react';
import logo from '/public/logo/hijab-girl-logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'Try-On', href: '/try-on' },
		{ name: 'Shop', href: '/shop' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];
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
														<span className="ml-2 text-2xl font-extrabold text-gray-800 hover:text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
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
							<Link
								href="/account"
								className="text-gray-700 hover:text-gray-900 transition"
							>
								<User size={22} />
							</Link>
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
							<Link
								href="/account"
								onClick={() => setOpen(false)}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition flex items-center space-x-2"
							>
								<User size={20} /> <span>Account</span>
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
