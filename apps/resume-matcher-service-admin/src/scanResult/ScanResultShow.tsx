import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBDESCRIPTION_TITLE_FIELD } from "../jobDescription/JobDescriptionTitle";

export const ScanResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="overallScore" source="overallScore" />
        <TextField label="skillsMatchScore" source="skillsMatchScore" />
        <TextField label="experienceMatchScore" source="experienceMatchScore" />
        <TextField label="educationMatchScore" source="educationMatchScore" />
        <TextField label="formattingScore" source="formattingScore" />
        <ReferenceField label="Resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="JobDescription"
          source="jobdescription.id"
          reference="JobDescription"
        >
          <TextField source={JOBDESCRIPTION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
