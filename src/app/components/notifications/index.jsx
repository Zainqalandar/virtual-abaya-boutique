import React from 'react';
import { Bell } from 'lucide-react';

const Notifications = () => {
	const notifications = [
		{ id: 1, message: 'New order received (#1005).', time: '2 hrs ago' },
		{
			id: 2,
			message: 'Stock low for Embroidered Beige.',
			time: '4 hrs ago',
		},
		{ id: 3, message: 'Monthly report is ready.', time: '1 day ago' },
	];
	return (
		<>
			<div className="bg-white shadow rounded-lg p-6">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">
					Notifications
				</h3>
				<ul className="space-y-3">
					{notifications.map((n) => (
						<li key={n.id} className="flex items-start space-x-3">
							<Bell
								size={20}
								className="text-indigo-600 flex-shrink-0"
							/>
							<div>
								<p className="text-gray-700">{n.message}</p>
								<span className="text-gray-500 text-sm">
									{n.time}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Notifications;
