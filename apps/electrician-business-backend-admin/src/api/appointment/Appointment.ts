export type Appointment = {
  appointmentDate: Date | null;
  createdAt: Date;
  customerEmail: string | null;
  customerName: string | null;
  id: string;
  serviceRequested: string | null;
  updatedAt: Date;
};
