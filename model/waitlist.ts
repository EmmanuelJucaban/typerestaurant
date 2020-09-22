interface IWaitlist {
  id: string;
  name: string;
  email?: string;
  phone: string;
}

export const waitlist: IWaitlist[] = [
  {
    name: 'Emmanuel',
    // email: 'manny@m.com',
    phone: '119',
    id: '2',
  },
];
