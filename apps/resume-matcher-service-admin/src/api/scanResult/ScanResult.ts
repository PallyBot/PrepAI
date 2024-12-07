import { Resume } from "../resume/Resume";
import { JobDescription } from "../jobDescription/JobDescription";

export type ScanResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  overallScore: number | null;
  skillsMatchScore: number | null;
  experienceMatchScore: number | null;
  educationMatchScore: number | null;
  formattingScore: number | null;
  resume?: Resume | null;
  jobDescription?: JobDescription | null;
};
