import React from 'react';
import DashboardStats from '../components/dashboard-stats';
import RecentOrders from '../components/recent-orders';
import InventoryOverview from '../components/inventory-overview';
import UserProfileCard from '../components/user-profile-card';
import Notifications from '../components/notifications';

const Dashboard = () => {
	return (
		<>
			<div className="container mx-auto p-6 space-y-6">
				<h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
				<DashboardStats />
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 space-y-6">
						<RecentOrders />
						<InventoryOverview />
					</div>
					<div className="space-y-6">
						<UserProfileCard />
						<Notifications />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
