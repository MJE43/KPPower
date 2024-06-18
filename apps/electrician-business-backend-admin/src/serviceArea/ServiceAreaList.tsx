import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceAreaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServiceAreas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="areaName" source="areaName" />
        <TextField label="areaZipCode" source="areaZipCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="mapUrl" source="mapUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
