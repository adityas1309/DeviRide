import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import RideTracking from './RideTracking';
import SOSButton from './SOSButton';

const BookRide = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideId, setRideId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBookRide = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/rides/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({ pickupLocation: pickup, destination }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRideId(data.ride._id);
      navigate('/ride-history');
    } catch (error) {
      console.error('Error booking ride', error);
      setError('Failed to book ride. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Book a Ride
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleBookRide}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="pickup" className="sr-only">
                Pickup Location
              </label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="destination" className="sr-only">
                Destination
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Book Ride
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        {rideId && (
          <>
            <RideTracking rideId={rideId} />
            <SOSButton rideId={rideId} />
          </>
        )}
      </div>
    </div>
  );
};

export default BookRide;
