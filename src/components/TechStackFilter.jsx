import React, { useState } from 'react';

const techChips = [
  'Java',
  'Spring Boot',
  'Microservices',
  'Kafka',
  'React',
  'AWS',
];

export default function TechStackFilter({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center my-8">
      {techChips.map((chip) => (
        <button
          key={chip}
          className={`px-4 py-2 rounded-full border font-semibold text-sm transition shadow ${selected === chip ? 'bg-emerald-600 text-white border-emerald-600 scale-105' : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-emerald-700 hover:text-white'}`}
          onClick={() => setSelected(selected === chip ? '' : chip)}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
