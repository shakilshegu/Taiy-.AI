
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 overflow-y-auto md:relative fixed md:top-0 md:left-0 top-0 left-0 bottom-0">
      <ul>
        <li className="mb-4">
          <Link
            to="/"
            className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out"
          >
            Contacts
          </Link>
        </li>
        <li className="mb-4">
          <button
            onClick={toggleDropdown}
            className="w-full text-left flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out focus:outline-none"
          >
            <span className="flex-1">Dashboard</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="pl-4 mt-2 bg-gray-700 rounded-md">
              <li className="mb-2">
                <Link
                  to="/dashboard/world-total"
                  className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                >
                  COVID-19 World Total Count
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/dashboard/country-cases"
                  className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                >
                  COVID-19 Cases by Country
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/over-time"
                  className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                >
                  COVID-19 Cases Over Time
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
