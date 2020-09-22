interface IReservation {
  id: string;
  name: string;
  email?: string;
  phone: string;
}

export const reservations: IReservation[] = [
  {
    name: 'Manny',
    // email: 'manny@m.com',
    phone: '911',
    id: '1',
  },
];
