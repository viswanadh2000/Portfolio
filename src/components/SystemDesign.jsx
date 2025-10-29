import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const SystemDesign = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      themeCSS: `
        .node rect { fill: #1e293b; stroke: #475569; }
        .edgeLabel { color: #94a3b8; }
        .nodeLabel { color: #e2e8f0; }
      `
    });
  }, []);

  const airlineSystemDiagram = `
    graph TB
      Gateway[API Gateway]
      Auth[Auth Service]
      Flight[Flight Service]
      Booking[Booking Service]
      Payment[Payment Service]
      Kafka[Kafka Event Bus]
      DB[(Database)]
      Cache[(Redis Cache)]
      
      Gateway --> Auth
      Gateway --> Flight
      Gateway --> Booking
      Gateway --> Payment
      
      Flight --> Kafka
      Booking --> Kafka
      Payment --> Kafka
      
      Kafka --> DB
      Flight --> Cache
      Booking --> Cache
  `;

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">System Architecture</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Airline Booking System</h3>
          <div className="mermaid bg-gray-800 p-4 rounded-lg overflow-auto">
            {airlineSystemDiagram}
          </div>
          
          <div className="mt-8 space-y-4 text-gray-300">
            <h4 className="text-lg font-semibold">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Microservices architecture with API Gateway pattern</li>
              <li>Event-driven communication using Kafka</li>
              <li>Caching layer with Redis for improved performance</li>
              <li>Scalable and fault-tolerant design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;