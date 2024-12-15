import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  customerEmail?: StringNullableFilter;
  customerName?: StringNullableFilter;
  id?: StringFilter;
  serviceRequested?: StringNullableFilter;
};
