import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const JobDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="interviewType" source="interviewType" />
        <TextInput label="language" source="language" />
      </SimpleForm>
    </Create>
  );
};
