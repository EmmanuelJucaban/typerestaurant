export interface IReservation {
  id: string;
  email?: string;
  name: string;
  phone: string;
}

//Tell TypeScript what type this variable has to be
export const reservations: IReservation[] = [
  {
    id: '1',
    email: 'manny@m.com',
    name: 'Manny',
    phone: '911',
  },
];


