import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobDescriptionWhereUniqueInput } from "../jobDescription/JobDescriptionWhereUniqueInput";

export type ScanResultWhereInput = {
  id?: StringFilter;
  overallScore?: IntNullableFilter;
  skillsMatchScore?: IntNullableFilter;
  experienceMatchScore?: IntNullableFilter;
  educationMatchScore?: IntNullableFilter;
  formattingScore?: IntNullableFilter;
  resume?: ResumeWhereUniqueInput;
  jobDescription?: JobDescriptionWhereUniqueInput;
};
