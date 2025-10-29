import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
  const data = {
    labels: ['Java/Spring Boot', 'AWS', 'Kafka', 'React', 'SQL/NoSQL', 'System Design'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 75, 85, 80],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#e2e8f0',
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#94a3b8',
          backdropColor: 'transparent',
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            let level = 'Learning';
            if (value >= 80) level = 'Expert';
            else if (value >= 60) level = 'Intermediate';
            return `${level} (${value}%)`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Technical Proficiency</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="h-[400px] w-full">
            <Radar data={data} options={options} />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold mb-2">Skill Levels:</h4>
              <ul className="space-y-1">
                <li>
                  <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  80-100: Expert
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-indigo-400 rounded-full mr-2"></span>
                  60-79: Intermediate
                </li>
                <li>
                  <span className="inline-block w-3 h-3 bg-indigo-300 rounded-full mr-2"></span>
                  0-59: Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsRadar;