import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestimonialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Testimonials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="testimonialText" source="testimonialText" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
