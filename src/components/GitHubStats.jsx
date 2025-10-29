import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const username = 'viswanadh2000';

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGitHubStats();
  }, []);

  if (!stats) {
    return <div className="text-center py-8">Loading GitHub stats...</div>;
  }

  const statCards = [
    { title: 'Repositories', value: stats.public_repos, icon: '📚' },
    { title: 'Followers', value: stats.followers, icon: '👥' },
    { title: 'Following', value: stats.following, icon: '👤' },
    { title: 'Joined', value: new Date(stats.created_at).getFullYear(), icon: '📅' },
  ];
  
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="py-16"
     >
       <h2 className="text-3xl font-bold text-center mb-12">GitHub Activity</h2>
       <div className="card p-6">
         <div className="mb-8">
           <h3 className="text-xl font-semibold mb-4">Contribution Calendar</h3>
           <GitHubCalendar
             username="viswanadh2000"
             theme={{
               light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
               dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
             }}
             blockSize={12}
             blockMargin={4}
             fontSize={16}
           />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
           <div className="p-4 rounded-lg bg-zinc-800/50">
             <h4 className="text-emerald-400 text-lg font-semibold">Repositories</h4>
             <p className="text-3xl font-bold mt-2">20+</p>
           </div>
           <div className="p-4 rounded-lg bg-zinc-800/50">
             <h4 className="text-emerald-400 text-lg font-semibold">Contributions</h4>
             <p className="text-3xl font-bold mt-2">500+</p>
           </div>
           <div className="p-4 rounded-lg bg-zinc-800/50">
             <h4 className="text-emerald-400 text-lg font-semibold">Stars</h4>
             <p className="text-3xl font-bold mt-2">50+</p>
           </div>
         </div>
       </div>
     </motion.div>
   );
};

export default GitHubStats;