import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { JobDescriptionWhereUniqueInput } from "../jobDescription/JobDescriptionWhereUniqueInput";

export type ScanResultUpdateInput = {
  overallScore?: number | null;
  skillsMatchScore?: number | null;
  experienceMatchScore?: number | null;
  educationMatchScore?: number | null;
  formattingScore?: number | null;
  resume?: ResumeWhereUniqueInput | null;
  jobDescription?: JobDescriptionWhereUniqueInput | null;
};
