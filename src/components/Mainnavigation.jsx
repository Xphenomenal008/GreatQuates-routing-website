import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Mainnavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-sky-600 to-indigo-700 shadow-xl flex justify-between items-center px-8 py-4 rounded-b-xl">
      {/* Logo / Brand Name */}
      <div className='flex items-center space-x-2 text-white text-3xl font-extrabold'>
        <span>Great</span>
        <span className="text-yellow-400">Quates</span>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row gap-8 lg:space-x-8">
          <li>
            <NavLink
              to="/quate"
              className={({ isActive }) =>
                `text-white text-lg font-medium hover:text-sky-300 hover:scale-105 transition-all duration-300 ease-in-out ${
                  isActive ? 'border-b-2 border-sky-200 text-sky-100' : ''
                }`
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quate"
              className={({ isActive }) =>
                `text-white text-lg font-medium hover:text-sky-300 hover:scale-105 transition-all duration-300 ease-in-out ${
                  isActive ? 'border-b-2 border-sky-200 text-sky-100' : ''
                }`
              }
            >
              Add New Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainnavigation;
