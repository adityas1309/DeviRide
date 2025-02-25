import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const RideHistory = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRideHistory = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/rides/history', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.error('Error fetching ride history', error);
      }
    };

    fetchRideHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        Ride History
      </h2>
      <div className="space-y-4">
        {rides.map((ride) => (
          <div key={ride._id} className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-700">
              <strong>Pickup:</strong> {ride.pickupLocation}
            </p>
            <p className="text-gray-700">
              <strong>Destination:</strong> {ride.destination}
            </p>
            <p className="text-gray-700">
              <strong>Status:</strong> {ride.status}
            </p>
            <p className="text-gray-700">
              <strong>Date:</strong> {new Date(ride.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/book-ride" className="text-indigo-600 hover:text-indigo-500">
          Book a new ride
        </Link>
      </div>
    </div>
  );
};

export default RideHistory;
