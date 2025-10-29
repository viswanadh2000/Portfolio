import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AIResumeParser = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Your skills data
  const mySkills = {
    languages: ['Java', 'JavaScript', 'Python'],
    frameworks: ['Spring Boot', 'React', 'Node.js'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    cloud: ['AWS', 'Docker', 'Kubernetes'],
    tools: ['Git', 'Jenkins', 'Kafka']
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    setLoading(true);

    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      // Simulate AI processing
      setTimeout(() => {
        analyzeResume(file);
      }, 2000);
    }
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setLoading(true);
      // Simulate AI processing
      setTimeout(() => {
        analyzeResume(file);
      }, 2000);
    }
  };

  const analyzeResume = (file) => {
    // Simulate AI analysis
    const mockSkills = {
      languages: ['Java', 'Python', 'C++'],
      frameworks: ['Spring', 'Django'],
      databases: ['MySQL', 'Oracle'],
      cloud: ['AWS'],
      tools: ['Git', 'Docker']
    };

    const comparison = compareSkills(mockSkills);
    setResults(comparison);
    setLoading(false);
  };

  const compareSkills = (candidateSkills) => {
    const matches = {};
    let totalMatches = 0;
    let totalSkills = 0;

    for (const category in mySkills) {
      matches[category] = {
        matching: mySkills[category].filter(skill => 
          candidateSkills[category]?.includes(skill)
        ),
        missing: mySkills[category].filter(skill => 
          !candidateSkills[category]?.includes(skill)
        ),
        additional: candidateSkills[category]?.filter(skill => 
          !mySkills[category].includes(skill)
        ) || []
      };
      totalMatches += matches[category].matching.length;
      totalSkills += mySkills[category].length;
    }

    return {
      matches,
      matchPercentage: Math.round((totalMatches / totalSkills) * 100)
    };
  };

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">AI Resume Parser</h2>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging ? 'border-emerald-500 bg-gray-700' : 'border-gray-600'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="cursor-pointer"
            >
              <div className="text-4xl mb-4">📄</div>
              <p className="text-gray-300 mb-2">
                Drop your resume here or click to upload
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF format only
              </p>
            </label>
          </div>

          {loading && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-500"></div>
              <p className="text-gray-300 mt-2">Analyzing resume...</p>
            </div>
          )}

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Skills Match: {results.matchPercentage}%
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-emerald-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${results.matchPercentage}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              {Object.entries(results.matches).map(([category, { matching, missing, additional }]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 capitalize">
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {matching.length > 0 && (
                      <p className="text-emerald-400">
                        ✓ Matching: {matching.join(', ')}
                      </p>
                    )}
                    {missing.length > 0 && (
                      <p className="text-red-400">
                        ✗ Missing: {missing.join(', ')}
                      </p>
                    )}
                    {additional.length > 0 && (
                      <p className="text-blue-400">
                        + Additional: {additional.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIResumeParser;