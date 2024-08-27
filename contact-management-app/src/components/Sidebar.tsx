
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-2 left-2 z-50 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 p-3 rounded-full shadow-lg transition-transform transform active:scale-90"
      >
        ☰
      </button>


      {/* Sidebar */}
      <div
        className={`md:relative h-screen  fixed top-0 left-0 bottom-0 w-64 bg-gray-800 text-white p-6 md:p-4 overflow-y-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:translate-x-0 z-40`}
      >
        <button
          onClick={toggleSidebar}
          className="md:hidden text-right w-full text-white mb-4"
        >
          ✕
        </button>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleSidebar}
            >
              Contacts
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              className="w-full text-left flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out focus:outline-none"
            >
              <span className="flex-1">Dashboard</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2 bg-gray-700 rounded-md">
                <li>
                  <Link
                    to="/dashboard/world-total"
                    className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                    onClick={toggleSidebar}
                  >
                    COVID-19 World Total Count
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/country-cases"
                    className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                    onClick={toggleSidebar}
                  >
                    COVID-19 Cases by Country
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/over-time"
                    className="block p-2 rounded-md hover:bg-gray-600 transition duration-200 ease-in-out"
                    onClick={toggleSidebar}
                  >
                    COVID-19 Cases Over Time
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
