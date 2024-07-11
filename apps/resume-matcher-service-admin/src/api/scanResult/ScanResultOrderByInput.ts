import { SortOrder } from "../../util/SortOrder";

export type ScanResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  overallScore?: SortOrder;
  skillsMatchScore?: SortOrder;
  experienceMatchScore?: SortOrder;
  educationMatchScore?: SortOrder;
  formattingScore?: SortOrder;
  resumeId?: SortOrder;
  jobDescriptionId?: SortOrder;
};
