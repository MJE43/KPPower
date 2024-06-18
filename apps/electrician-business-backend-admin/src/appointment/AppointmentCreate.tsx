import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="appointmentDate" source="appointmentDate" />
        <TextInput label="customerEmail" source="customerEmail" type="email" />
        <TextInput label="customerName" source="customerName" />
        <TextInput label="serviceRequested" source="serviceRequested" />
      </SimpleForm>
    </Create>
  );
};
