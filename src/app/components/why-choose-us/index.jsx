import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
	const features = [
		{
			title: 'High-Quality Fabric',
			desc: 'Premium materials for elegance and comfort.',
		},
		{
			title: 'Virtual Try-On',
			desc: 'Try before you buy with our AR-powered feature.',
		},
		{
			title: 'Secure Checkout',
			desc: 'Safe payment options and data protection.',
		},
		{ title: 'Fast Delivery', desc: 'Quick shipping across Pakistan.' },
	];
	return (
		<>
			<section className="py-16 bg-gray-50">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						Why Choose Us
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{features.map((f) => (
							<div
								key={f.title}
								className="flex items-start space-x-4"
							>
								<CheckCircle
									size={32}
									className="text-indigo-600 flex-shrink-0"
								/>
								<div>
									<h3 className="text-xl font-semibold text-gray-800">
										{f.title}
									</h3>
									<p className="text-gray-600 mt-2">
										{f.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyChooseUs;
