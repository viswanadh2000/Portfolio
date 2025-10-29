import React from 'react';
import { motion } from 'framer-motion';

const ToolStack = () => {
  const tools = [
    {
      name: 'IntelliJ IDEA',
      icon: '🧰',
      description: 'Primary IDE for Java/Spring development with custom plugins',
    },
    {
      name: 'Docker',
      icon: '🐳',
      description: 'Containerized 10+ microservices in OpenShift',
    },
    {
      name: 'AWS',
      icon: '☁️',
      description: 'Deployed and managed cloud-native applications',
    },
    {
      name: 'Jenkins',
      icon: '🔄',
      description: 'Implemented CI/CD pipelines for automated deployments',
    },
    {
      name: 'GitHub',
      icon: '📚',
      description: 'Version control and collaboration',
    },
    {
      name: 'Postman',
      icon: '📬',
      description: 'API testing and documentation',
    },
    {
      name: 'OpenShift',
      icon: '🚀',
      description: 'Container orchestration platform',
    },
    {
      name: 'Conjur',
      icon: '🔐',
      description: 'Secrets management and security',
    },
  ];

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Tools & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolStack;