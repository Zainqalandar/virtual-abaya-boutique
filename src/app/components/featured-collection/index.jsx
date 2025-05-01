import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCollection = () => {
	const items = [
		{
			id: 1,
			name: 'Classic Black Abaya',
			image: '/Featured Collection/classic-black-abaya.jpg',
			price: '₨4,500',
		},
		{
			id: 2,
			name: 'Embroidered Beige Abaya',
			image: '/Featured Collection/embroidered-beige-abaya.jpg',
			price: '₨5,200',
		},
		{
			id: 3,
			name: 'Silk Navy Abaya',
			image: '/Featured Collection/silk-navy-abaya.jpg',
			price: '₨6,000',
		},
		{
			id: 4,
			name: 'Floral Print Abaya',
			image: '/Featured Collection/floral-print-abaya.jpg',
			price: '₨5,800',
		},
	];
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
						Featured Collection
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{items.map((item) => (
							<div
								key={item.id}
								className="border rounded-lg overflow-hidden hover:shadow-lg transition"
							>
								<Image
									src={item.image}
									alt={item.name}
									width={400}
									height={500}
									className="object-cover"
								/>
								<div className="p-4">
									<h3 className="text-lg font-medium text-gray-800">
										{item.name}
									</h3>
									<p className="mt-2 text-indigo-600 font-semibold">
										{item.price}
									</p>
									<div className="mt-4 flex items-center justify-between">
										<Link href={`/product/${item.id}`}>
											<span className="text-sm text-gray-600 hover:underline">
												View
											</span>
										</Link>
										<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition">
											Try On
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default FeaturedCollection;
