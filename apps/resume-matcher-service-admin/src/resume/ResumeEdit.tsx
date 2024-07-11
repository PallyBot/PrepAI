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

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
