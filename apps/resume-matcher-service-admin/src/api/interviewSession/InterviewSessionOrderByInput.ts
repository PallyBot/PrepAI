import { SortOrder } from "../../util/SortOrder";

export type InterviewSessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sessionDate?: SortOrder;
  transcript?: SortOrder;
  overallScore?: SortOrder;
  candidateId?: SortOrder;
};
