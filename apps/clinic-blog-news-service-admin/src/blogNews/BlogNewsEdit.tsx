import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlogNewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="title" source="title" />
        <TextInput label="link" source="link" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
