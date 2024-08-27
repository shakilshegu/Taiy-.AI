// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li className='mb-4'>
          <Link to="/" className="hover:text-gray-400">Contacts</Link>
        </li>
        <li>
          <Link to="/dashboard"  className="hover:text-gray-400">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
