import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="appointmentDate" source="appointmentDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerEmail" source="customerEmail" />
        <TextField label="customerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="serviceRequested" source="serviceRequested" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
