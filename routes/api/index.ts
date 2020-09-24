import express from 'express';
import reservationRoutes from './reservation';
import waitlistRoutes from './waitlist';
const router = express.Router();

// Every route inside of here has /api prepended to it already
// /api/reservation
router.use('/reservation', reservationRoutes);
// /api/waitlist
router.use('/waitlist', waitlistRoutes);


export default router;

