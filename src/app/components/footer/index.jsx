import Link from 'next/link';

function Footer() {
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
            <footer className="bg-gray-800 text-gray-300 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Copyright */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Abaya Boutique</h3>
                        <p>© {new Date().getFullYear()} Abaya Boutique. All rights reserved.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            {navItems.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Contact Us</h4>
                        <p>Email: support@abayaboutique.com</p>
                        <p>Phone: +92 300 1234567</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;