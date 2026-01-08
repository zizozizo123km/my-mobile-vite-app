import React from 'react';

/**
 * HomePage Component
 * Displays the main landing page, optimized for both standard browser viewing
 * and environments like Termux (using a dark, high-contrast aesthetic).
 */
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      
      {/* Main Application Container */}
      <main className="w-full max-w-5xl p-8 bg-gray-800 rounded-xl shadow-2xl border border-green-500/30 transition duration-300 hover:shadow-green-500/20">

        {/* Header and Title */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 mb-3 tracking-tight">
            Project Nexus
          </h1>
          <p className="text-xl text-gray-300 font-light italic">
            A sophisticated web application built for seamless performance.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Optimized for Browser & Termux environments.
          </p>
        </header>

        {/* Action Cards / Navigation */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Card 1: Dashboard */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer border border-gray-700 hover:border-green-500 transform hover:scale-[1.02]">
            <span className="text-4xl mb-3 block">🚀</span>
            <h2 className="text-xl font-semibold text-white mb-2">Start Session</h2>
            <p className="text-sm text-gray-400">
              Initialize the core system and access the main dashboard.
            </p>
          </div>

          {/* Card 2: Settings */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer border border-gray-700 hover:border-green-500 transform hover:scale-[1.02]">
            <span className="text-4xl mb-3 block">⚙️</span>
            <h2 className="text-xl font-semibold text-white mb-2">Configuration</h2>
            <p className="text-sm text-gray-400">
              Modify application parameters and user preferences.
            </p>
          </div>

          {/* Card 3: Logs/Status */}
          <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer border border-gray-700 hover:border-green-500 transform hover:scale-[1.02]">
            <span className="text-4xl mb-3 block">📜</span>
            <h2 className="text-xl font-semibold text-white mb-2">System Status</h2>
            <p className="text-sm text-gray-400">
              Review recent activity logs and health checks.
            </p>
          </div>
        </section>

        {/* CLI Footer/Status Indicator */}
        <div className="mt-16 pt-6 border-t border-gray-700">
          <p className="text-sm text-green-500 font-mono whitespace-pre-wrap">
            <span className="text-red-400">root@nexus</span>:<span className="text-blue-400">~/app</span>$ <span className="text-gray-200">system_check --status</span>
          </p>
          <p className="text-xs text-gray-400 font-mono mt-1 ml-4">
            [OK] Frontend loaded successfully. Ready for command input.
          </p>
        </div>

      </main>

      {/* Global Footer */}
      <footer className="mt-10 text-xs text-gray-600">
        &copy; 2024 Project Nexus | v1.0.0-beta
      </footer>
    </div>
  );
};

export default HomePage;