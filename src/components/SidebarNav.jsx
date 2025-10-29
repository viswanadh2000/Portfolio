import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: <FaHome />, label: 'Home', path: '/' },
  { icon: <FaUser />, label: 'About', path: '/about' },
  { icon: <FaCode />, label: 'Skills', path: '/skills' },
  { icon: <FaProjectDiagram />, label: 'Projects', path: '/projects' },
  { icon: <FaEnvelope />, label: 'Contact', path: '/contact' },
];

export default function SidebarNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 bg-zinc-900/80 rounded-2xl p-3 shadow-lg border border-zinc-800">
      {navItems.map((item) => (
        <button
          key={item.path}
          aria-label={item.label}
          className={`text-xl text-zinc-400 hover:text-emerald-400 transition focus:outline-none ${location.pathname === item.path ? 'text-emerald-400 scale-110' : ''}`}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
}
