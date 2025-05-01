import Image from 'next/image';
import Link from 'next/link';

const VirtualTryOnPromo = () => {
	return (
		<>
			<section className="py-16 bg-gray-50">
				<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<Image
							src="/Virtual-Try-On/hijab-looks.webp"
							alt="Virtual Try-On"
							width={600}
							height={400}
							className="rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-1/2 md:pl-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">
							Experience Virtual Try-On
						</h2>
						<p className="text-gray-600 mb-6">
							See how our abayas look on you in real-time with our
							cutting-edge AR feature. Easy, fun, and accurate.
						</p>
						<Link href="/try-on">
							<span className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition">
								Try Now
							</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default VirtualTryOnPromo;
