import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlogNewsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="title" source="title" />
        <TextInput label="link" source="link" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
