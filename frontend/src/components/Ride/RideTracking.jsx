import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000';

const RideTracking = ({ rideId }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('joinRide', rideId);

    socket.on('locationUpdate', (data) => {
      setLocation(data);
    });

    return () => socket.disconnect();
  }, [rideId]);

  return (
    <MapContainer center={[0, 0]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location && (
        <Marker
          position={[location.latitude, location.longitude]}
          icon={L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        />
      )}
    </MapContainer>
  );
};

export default RideTracking;
