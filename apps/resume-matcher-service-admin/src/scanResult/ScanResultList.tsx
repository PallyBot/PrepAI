import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";
import { JOBDESCRIPTION_TITLE_FIELD } from "../jobDescription/JobDescriptionTitle";

export const ScanResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScanResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
