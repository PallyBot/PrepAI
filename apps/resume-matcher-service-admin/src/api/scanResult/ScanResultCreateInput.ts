import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobDescriptionWhereUniqueInput } from "../jobDescription/JobDescriptionWhereUniqueInput";

export type ScanResultCreateInput = {
  overallScore?: number | null;
  skillsMatchScore?: number | null;
  experienceMatchScore?: number | null;
  educationMatchScore?: number | null;
  formattingScore?: number | null;
  resume?: ResumeWhereUniqueInput | null;
  jobDescription?: JobDescriptionWhereUniqueInput | null;
};
