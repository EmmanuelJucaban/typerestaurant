import express from 'express';
import apiRoutes from './api';

const router = express.Router();
// routes/index.ts

// router level middleware
// prepends /api to any route that's inside of the index.ts file
router.use('/api', apiRoutes);
export default router;
