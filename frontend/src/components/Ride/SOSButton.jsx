import React from 'react';

const SOSButton = ({ rideId }) => {
  const handleSOS = async () => {
    try {
      const response = await fetch('/api/rides/sos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rideId }),
      });
      if (response.ok) {
        alert('SOS alert sent!');
      }
    } catch (error) {
      console.error('Error sending SOS alert', error);
    }
  };

  return (
    <button
      onClick={handleSOS}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      SOS
    </button>
  );
};

export default SOSButton;
