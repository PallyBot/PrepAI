import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "./ResumeTitle";
import { JOBDESCRIPTION_TITLE_FIELD } from "../jobDescription/JobDescriptionTitle";

export const ResumeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="timestamp" source="timestamp" />
        <ReferenceManyField
          reference="ScanResult"
          target="resumeId"
          label="ScanResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="overallScore" source="overallScore" />
            <TextField label="skillsMatchScore" source="skillsMatchScore" />
            <TextField
              label="experienceMatchScore"
              source="experienceMatchScore"
            />
            <TextField
              label="educationMatchScore"
              source="educationMatchScore"
            />
            <TextField label="formattingScore" source="formattingScore" />
            <ReferenceField
              label="Resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="JobDescription"
              source="jobdescription.id"
              reference="JobDescription"
            >
              <TextField source={JOBDESCRIPTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
