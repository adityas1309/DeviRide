import React, { useState } from 'react';

const BookRide = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleBookRide = () => {
    console.log('Booking ride from:', pickup, 'to:', destination);
  };

  return (
    <div>
      <h2>Book a Ride</h2>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleBookRide}>Book Ride</button>
    </div>
  );
};

export default BookRide;
