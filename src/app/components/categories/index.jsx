import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
	const categories = [
		{
			name: 'Casual',
			image: '/abaya-categorys/casual-abaya.jpg',
			href: '/category/casual',
		},
		{
			name: 'Formal',
			image: '/abaya-categorys/formal-abaya.jpg',
			href: '/category/formal',
		},
		{
			name: 'Luxury',
			image: '/abaya-categorys/luxury-abaya.jpeg',
			href: '/category/luxury',
		},
		{
			name: 'Printed',
			image: '/abaya-categorys/prited-abaya.webp',
			href: '/category/printed',
		},
	];
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
						Shop by Category
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{categories.map((cat) => (
							<Link key={cat.name} href={cat.href}>
								<span className="block overflow-hidden rounded-lg relative group">
									<Image
										src={cat.image}
										alt={cat.name}
										width={400}
										height={300}
										className="object-cover group-hover:scale-105 transition-transform"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="text-white text-lg font-medium">
											{cat.name}
										</span>
									</div>
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Categories;
