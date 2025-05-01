import React from 'react';

const RecentOrders = () => {
	const orders = [
		{
			id: '#1001',
			customer: 'Aisha K.',
			date: 'Apr 28, 2025',
			status: 'Shipped',
			total: '$120',
		},
		{
			id: '#1002',
			customer: 'Fatima S.',
			date: 'Apr 29, 2025',
			status: 'Processing',
			total: '$85',
		},
		{
			id: '#1003',
			customer: 'Zara N.',
			date: 'Apr 30, 2025',
			status: 'Delivered',
			total: '$200',
		},
		{
			id: '#1004',
			customer: 'Sara L.',
			date: 'May 1, 2025',
			status: 'Pending',
			total: '$50',
		},
	];
	return (
		<>
			<div className="bg-white shadow rounded-lg overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							{[
								'Order ID',
								'Customer',
								'Date',
								'Status',
								'Total',
							].map((h, i) => (
								<th
									key={i}
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
								>
									{h}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{orders.map((o) => (
							<tr
								key={o.id}
								className="hover:bg-gray-50 transition"
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{o.id}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{o.customer}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{o.date}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											{
												Shipped:
													'bg-green-100 text-green-800',
												Delivered:
													'bg-blue-100 text-blue-800',
												Processing:
													'bg-yellow-100 text-yellow-800',
												Pending:
													'bg-gray-100 text-gray-800',
											}[o.status]
										}`}
									>
										{o.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
									{o.total}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default RecentOrders;
