import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  createdAt?: SortOrder;
  customerEmail?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
  serviceRequested?: SortOrder;
  updatedAt?: SortOrder;
};
