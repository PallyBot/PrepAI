import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InterviewSessionTitle } from "../interviewSession/InterviewSessionTitle";

export const CandidateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="cvText" multiline source="cvText" />
        <TextInput label="cvFileUrl" source="cvFileUrl" />
        <ReferenceArrayInput
          source="interviewSessions"
          reference="InterviewSession"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewSessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
