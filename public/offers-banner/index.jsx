import React from 'react';

const OffersBanner = () => {
	return (
		<section className="py-12 bg-indigo-600">
			<div className="max-w-4xl mx-auto px-4 text-center text-white">
				<h2 className="text-3xl font-bold mb-4">
					Spring Sale: Up to 30% OFF!
				</h2>
				<p className="mb-6">
					Use code <span className="font-extrabold">ABAYA30</span> at
					checkout. Limited time only.
				</p>
				<a
					href="/shop"
					className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition"
				>
					Shop the Sale
				</a>
			</div>
		</section>
	);
};

export default OffersBanner;
