const express = require('express');
const router = express.Router();
const { bookRide, getRideHistory } = require('../controllers/rideController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/book', authMiddleware, bookRide);
router.get('/history', authMiddleware, getRideHistory);

module.exports = router;
