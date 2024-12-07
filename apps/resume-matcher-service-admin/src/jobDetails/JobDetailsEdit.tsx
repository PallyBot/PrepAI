import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JobDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="interviewType" source="interviewType" />
        <TextInput label="language" source="language" />
      </SimpleForm>
    </Edit>
  );
};
