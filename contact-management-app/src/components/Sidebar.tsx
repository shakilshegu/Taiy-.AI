// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li className='mb-4'>
          <Link to="/" className="hover:text-gray-400">Contacts</Link>
        </li>
        <li className='mb-4'>
          <button 
            onClick={toggleDropdown} 
            className="w-full text-left hover:text-gray-400 focus:outline-none"
          >
            Dashboard
          </button>
          {isDropdownOpen && (
            <ul className="pl-4 mt-2 bg-gray-700 rounded-md">
              <li className='mb-2'>
                <Link to="/dashboard/world-total" className="block hover:text-gray-400">World Total Cases</Link>
              </li>
              <li className='mb-2'>
                <Link to="/dashboard/country-cases" className="block hover:text-gray-400">COVID-19 Cases by Country</Link>
              </li>
              <li>
                <Link to="/dashboard/over-time" className="block hover:text-gray-400">COVID-19 Cases Over Time</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
