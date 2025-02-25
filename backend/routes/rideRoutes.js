const express = require('express');
const router = express.Router();
const { bookRide, getRideHistory, updateLocation } = require('../controllers/rideController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/book', authMiddleware, bookRide);
router.get('/history', authMiddleware, getRideHistory);
router.post('/location', authMiddleware, updateLocation);

module.exports = router;
