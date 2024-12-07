import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScanResultTitle } from "../scanResult/ScanResultTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="fileUrl" source="fileUrl" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceArrayInput
          source="scanResults"
          reference="ScanResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScanResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
