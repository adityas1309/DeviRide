import React from 'react';

import {Link} from "react-router";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">SafeRide</h1>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-white">
              Signup
            </Link>
            <Link to="/book-ride" className="text-gray-300 hover:text-white">
              Book a Ride
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
