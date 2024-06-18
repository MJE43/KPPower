import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TestimonialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customerName" source="customerName" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="testimonialText" multiline source="testimonialText" />
      </SimpleForm>
    </Edit>
  );
};
