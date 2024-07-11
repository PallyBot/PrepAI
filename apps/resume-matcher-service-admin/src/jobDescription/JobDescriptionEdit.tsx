import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScanResultTitle } from "../scanResult/ScanResultTitle";

export const JobDescriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <ReferenceArrayInput
          source="scanResults"
          reference="ScanResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScanResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
