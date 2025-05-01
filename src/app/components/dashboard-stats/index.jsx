import React from 'react';
import { DollarSign, ShoppingCart, Users, Box } from 'lucide-react';

const DashboardStats = () => {
	const stats = [
		{ title: 'Total Sales', value: '$12,345', icon: DollarSign },
		{ title: 'Orders Today', value: '78', icon: ShoppingCart },
		{ title: 'New Customers', value: '32', icon: Users },
		{ title: 'Low Stock', value: '5', icon: Box },
	];
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((s, idx) => (
					<div
						key={idx}
						className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
					>
						<div className="flex items-center space-x-4">
							<s.icon size={32} className="text-indigo-600" />
							<div>
								<p className="text-sm font-medium text-gray-500">
									{s.title}
								</p>
								<p className="text-2xl font-semibold text-gray-800 mt-1">
									{s.value}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default DashboardStats;
