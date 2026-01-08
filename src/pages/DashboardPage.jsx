import React from 'react';
import { Users, DollarSign, Activity, CheckSquare, Clock } from 'lucide-react';

// Helper Component for displaying key metrics
const MetricCard = ({ title, value, icon: Icon, color }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color} transition duration-300 hover:shadow-xl transform hover:-translate-y-0.5`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className="p-3 bg-gray-100 rounded-full">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  </div>
);

const DashboardPage = () => {
  // Placeholder data for demonstration
  const metrics = [
    { title: 'Total Users', value: '1,250', icon: Users, color: 'border-blue-500' },
    { title: 'Revenue (MTD)', value: '$12,450', icon: DollarSign, color: 'border-green-500' },
    { title: 'Open Tasks', value: '14', icon: CheckSquare, color: 'border-yellow-500' },
    { title: 'Active Projects', value: '5', icon: Activity, color: 'border-purple-500' },
  ];

  const recentActivities = [
    { id: 1, description: 'New user registered: John Doe', time: '5 minutes ago', type: 'User' },
    { id: 2, description: 'Report generated for Q3 performance', time: '1 hour ago', type: 'Report' },
    { id: 3, description: 'Server maintenance scheduled', time: 'Yesterday', type: 'System' },
    { id: 4, description: 'Payment processed for invoice #1001', time: '2 days ago', type: 'Finance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here is a summary of your system performance.</p>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            color={metric.color}
          />
        ))}
      </div>

      {/* Main Content Area (Activity & Quick Stats) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Activity Panel (2/3 width on large screens) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Recent Activity Timeline</h2>
          <ul className="space-y-5">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                    <Clock className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 font-medium">{activity.description}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <span className="mr-3">{activity.time}</span>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        activity.type === 'User' ? 'bg-blue-100 text-blue-800' :
                        activity.type === 'Report' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                        {activity.type}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats/Info Panel (1/3 width on large screens) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">System Health</h2>
          <div className="space-y-4">
            
            {/* Server Load */}
            <div className="text-sm">
                <div className="flex justify-between text-gray-600 mb-1">
                    <span>Server Load</span>
                    <span className="font-medium text-green-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
            </div>

            {/* Storage Used */}
            <div className="text-sm">
                <div className="flex justify-between text-gray-600 mb-1">
                    <span>Storage Used</span>
                    <span className="font-medium text-red-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>

            {/* Pending Approvals */}
            <div className="flex justify-between text-base text-gray-700 pt-2 border-t">
                <span>Pending Approvals:</span>
                <span className="font-bold text-yellow-600">3</span>
            </div>
            
          </div>
          <button className="mt-8 w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150 shadow-md">
            Manage Settings
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;