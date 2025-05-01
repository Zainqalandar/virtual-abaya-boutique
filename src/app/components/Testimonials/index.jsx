import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
	const reviews = [
		{
			id: 1,
			name: 'Aisha K.',
			photo: '/testimonials/aisha.jpg',
			rating: 5,
			text: '“Virtual try-on ne meri shopping experience next-level bana di! Abayas bilkul perfect fit hui.”',
		},
		{
			id: 2,
			name: 'Fatima S.',
			photo: '/testimonials/fatima.jpg',
			rating: 4,
			text: '“Quality fabric aur fast delivery – main bahut khush hoon!”',
		},
		{
			id: 3,
			name: 'Zara N.',
			photo: '/testimonials/zara.jpg',
			rating: 5,
			text: '“Simple checkout aur friendly support ne bohat acha experience banaya.”',
		},
	];
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						What Our Customers Say
					</h2>
					<div className="space-y-8">
						{reviews.map((r) => (
							<div
								key={r.id}
								className="flex flex-col md:flex-row items-center md:space-x-6 bg-gray-50 p-6 rounded-lg shadow-sm"
							>
								<div className="w-24 h-24 relative flex-shrink-0">
									<Image
										src={r.photo}
										alt={r.name}
										layout="fill"
										className="rounded-full object-cover"
									/>
								</div>
								<div className="mt-4 md:mt-0 text-left">
									<p className="text-gray-700">
										&ldquo;{r.text}&rdquo;
									</p>
									<div className="mt-2 flex items-center">
										{[...Array(r.rating)].map((_, i) => (
											<svg
												key={i}
												className="w-5 h-5 text-indigo-500"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
											</svg>
										))}
									</div>
									<h4 className="mt-2 font-semibold text-gray-800">
										{r.name}
									</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
