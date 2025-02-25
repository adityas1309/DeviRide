import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Welcome to SafeRide
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Your safe and reliable ride-hailing service exclusively for women.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
