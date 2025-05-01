import React from 'react';
import Image from 'next/image';

const UserProfileCard = () => {
	return (
		<>
			<div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
				<div className="w-16 h-16 relative">
					<Image
						src="/admin/eman-ijaz.jpg"
						alt="Admin Avatar"
						layout="fill"
						className="rounded-full object-cover"
					/>
				</div>
				<div>
					<h4 className="text-xl font-semibold text-gray-800">
						Eman Ijaz
					</h4>
					<p className="text-gray-600">Store Manager</p>
					<button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition">
						View Profile
					</button>
				</div>
			</div>
		</>
	);
};

export default UserProfileCard;
