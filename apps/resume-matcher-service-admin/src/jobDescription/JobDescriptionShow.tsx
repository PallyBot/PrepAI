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

import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBDESCRIPTION_TITLE_FIELD } from "./JobDescriptionTitle";

export const JobDescriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="title" source="title" />
        <TextField label="postedDate" source="postedDate" />
        <ReferenceManyField
          reference="ScanResult"
          target="jobDescriptionId"
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
