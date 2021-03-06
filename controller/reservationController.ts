import { Request, Response } from 'express';
import { reservations, waitlist, IReservation, IWaitlist } from '../model';
export default {
  getReservations: (req: Request, res: Response) => {
    res.json(reservations);
  },
  addReservation: (req: Request, res: Response) => {
    const reservation: IReservation & IWaitlist = req.body;
    if (reservations.length < 5) {
      reservations.push(reservation);
      return res.send("viewtables.html");
      // return res.redirect('/viewtables.html');
    }
    waitlist.push(reservation);
    return res.send("Sorry you got waitlisted");
  },
};
