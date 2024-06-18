import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ServiceAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="areaName" source="areaName" />
        <TextInput label="areaZipCode" source="areaZipCode" />
        <TextInput label="mapUrl" source="mapUrl" />
      </SimpleForm>
    </Create>
  );
};
