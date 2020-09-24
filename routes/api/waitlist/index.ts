import express from 'express';
import waitlistController from '../../../controller/waitlistController';

const router = express.Router();
// /api/waitlist
router.get('/', waitlistController.getWaitlist);
export default router;
