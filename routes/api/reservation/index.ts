import express from 'express';
import reservationController from '../../../controller/reservationController';
const router = express.Router();
// Prepended to every route we declare here /api/reservation
// /api/reservation
router.route('/')
  .get(reservationController.getReservations)
  .post(reservationController.addReservation);

export default router;
