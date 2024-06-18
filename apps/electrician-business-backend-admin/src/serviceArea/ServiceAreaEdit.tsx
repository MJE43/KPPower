import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServiceAreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="areaName" source="areaName" />
        <TextInput label="areaZipCode" source="areaZipCode" />
        <TextInput label="mapUrl" source="mapUrl" />
      </SimpleForm>
    </Edit>
  );
};
