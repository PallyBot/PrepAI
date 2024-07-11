import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ResumeTitle } from "../resume/ResumeTitle";
import { JobDescriptionTitle } from "../jobDescription/JobDescriptionTitle";

export const ScanResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="overallScore" source="overallScore" />
        <NumberInput
          step={1}
          label="skillsMatchScore"
          source="skillsMatchScore"
        />
        <NumberInput
          step={1}
          label="experienceMatchScore"
          source="experienceMatchScore"
        />
        <NumberInput
          step={1}
          label="educationMatchScore"
          source="educationMatchScore"
        />
        <NumberInput
          step={1}
          label="formattingScore"
          source="formattingScore"
        />
        <ReferenceInput source="resume.id" reference="Resume" label="Resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobDescription.id"
          reference="JobDescription"
          label="JobDescription"
        >
          <SelectInput optionText={JobDescriptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};