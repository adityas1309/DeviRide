const Ride = require('../models/Ride');
const io = require('../server').io;

exports.bookRide = async (req, res) => {
  const { pickupLocation, destination } = req.body;
  const userId = req.user.id;
  try {
    const ride = new Ride({ userId, pickupLocation, destination });
    await ride.save();
    res.status(201).json({ message: 'Ride booked', ride });
  } catch (error) {
    res.status(400).json({ error: 'Error booking ride' });
  }
};

exports.getRideHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    const rides = await Ride.find({ userId }).sort({ createdAt: -1 });
    res.json(rides);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching ride history' });
  }
};

exports.updateLocation = async (req, res) => {
  const { rideId, latitude, longitude } = req.body;
  try {
    const ride = await Ride.findById(rideId);
    if (!ride) {
      return res.status(404).json({ error: 'Ride not found' });
    }
    ride.currentLocation = { latitude, longitude };
    await ride.save();
    io.to(rideId).emit('locationUpdate', { latitude, longitude });
    res.json({ message: 'Location updated' });
  } catch (error) {
    res.status(400).json({ error: 'Error updating location' });
  }
};
