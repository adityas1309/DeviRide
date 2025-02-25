const Ride = require('../models/Ride');

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
