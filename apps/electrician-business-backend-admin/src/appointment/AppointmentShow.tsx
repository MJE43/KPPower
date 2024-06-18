import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appointmentDate" source="appointmentDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerEmail" source="customerEmail" />
        <TextField label="customerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="serviceRequested" source="serviceRequested" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
