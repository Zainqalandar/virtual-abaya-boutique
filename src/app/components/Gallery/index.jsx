import React from 'react';
import Image from 'next/image';

const Gallery = () => {
	const gallery = [
		'/gallery/1.jpeg',
		'/gallery/2.jpeg',
		'/gallery/3.jpeg',
		'/gallery/4.jpeg',
		'/gallery/5.jpeg',
		'/gallery/6.jpeg',
	];
	return (
		<>
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
						Lookbook
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
						{gallery.map((src, i) => (
							<div
								key={i}
								className="overflow-hidden rounded-lg group"
							>
								<Image
									src={src}
									alt={`Gallery image ${i + 1}`}
									width={300}
									height={400}
									className="object-cover group-hover:scale-105 transition-transform"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
