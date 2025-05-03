import React from 'react';

const ContactInfo = () => {
	return (
		<>
			<section className="py-16 bg-gray-50">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-extrabold text-gray-800 mb-6">
						Get in Touch
					</h2>
					<p className="text-gray-600 mb-8">
						We're here to help! Reach out with any questions or
						feedback and we'll get back to you as soon as possible.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h4 className="text-xl font-semibold text-gray-800 mb-2">
								Email
							</h4>
							<p className="text-gray-600">
								support@abayaboutique.com
							</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold text-gray-800 mb-2">
								Phone
							</h4>
							<p className="text-gray-600">+92 300 1234567</p>
						</div>
						<div>
							<h4 className="text-xl font-semibold text-gray-800 mb-2">
								Address
							</h4>
							<p className="text-gray-600">
								123 Fashion Street, Sheikhupura, Pakistan
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactInfo;
