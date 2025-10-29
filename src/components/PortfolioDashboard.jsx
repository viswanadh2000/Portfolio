import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { database } from '../firebase';

const PortfolioDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [resumeStats, setResumeStats] = useState({
    downloads: 0,
    countries: [],
    referrers: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeStats = () => {
      const resumeRef = ref(database, 'resume_downloads');
      onValue(resumeRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const downloads = Object.keys(data).length;
          const countries = [...new Set(Object.values(data).map(d => d.country))];
          const referrers = [...new Set(Object.values(data).map(d => d.referrer))];
          
          setResumeStats({
            downloads,
            countries,
            referrers
          });
        }
        setLoading(false);
      });
    };

    // Only fetch if admin
    if (isAdmin) {
      fetchResumeStats();
    }
  }, [isAdmin]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    setIsAdmin(true);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Admin Dashboard</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-emerald-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Portfolio Dashboard</h1>
          <button
            onClick={() => setIsAdmin(false)}
            className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resume Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Resume Analytics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Total Downloads</p>
                <p className="text-3xl font-bold text-emerald-500">{resumeStats.downloads}</p>
              </div>
              <div>
                <p className="text-gray-400">Countries</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {resumeStats.countries.map(country => (
                    <span key={country} className="px-2 py-1 bg-gray-700 rounded text-sm text-gray-300">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-400">Top Referrers</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {resumeStats.referrers.map(referrer => (
                    <span key={referrer} className="px-2 py-1 bg-gray-700 rounded text-sm text-gray-300">
                      {referrer || 'Direct'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">
                Update Resume
              </button>
              <button className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                Edit Projects
              </button>
              <button className="w-full px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-500 transition-colors">
                Manage Blog Posts
              </button>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">📥</span>
                <div>
                  <p className="text-gray-300">Resume downloaded from United States</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">👀</span>
                <div>
                  <p className="text-gray-300">Profile viewed by recruiter</p>
                  <p className="text-sm text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;