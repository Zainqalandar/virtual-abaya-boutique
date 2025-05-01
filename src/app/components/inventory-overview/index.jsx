import React from 'react';

const InventoryOverview = () => {
	const items = [
		{ name: 'Classic Black', stock: 8 },
		{ name: 'Embroidered Beige', stock: 3 },
		{ name: 'Silk Navy', stock: 12 },
		{ name: 'Floral Print', stock: 5 },
	];
	return (
		<>
			<div className="bg-white shadow rounded-lg p-6">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">
					Inventory Overview
				</h3>
				<ul className="space-y-3">
					{items.map((it, i) => (
						<li
							key={i}
							className="flex justify-between items-center"
						>
							<span className="text-gray-700">{it.name}</span>
							<div className="w-1/2 bg-gray-200 rounded-full h-2 overflow-hidden">
								<div
									className="bg-indigo-600 h-2 rounded-full"
									style={{
										width: `${Math.min(
											it.stock * 8,
											100
										)}%`,
									}}
								/>
							</div>
							<span className="text-gray-600 text-sm ml-2">
								{it.stock} in stock
							</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default InventoryOverview;
