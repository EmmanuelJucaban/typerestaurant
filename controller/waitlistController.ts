import { Request, Response } from 'express';
import { waitlist } from '../model';

export default {
  getWaitlist: (_req: Request, res: Response) => {
    res.json(waitlist);
  },
};
