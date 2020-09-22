import express from 'express';
import apiRoutes from './api';
const router = express.Router();
// routes/index.ts
// prepend /api to any route that's inside of the api folder
router.use('/api', apiRoutes);
export default router;
