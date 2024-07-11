import { InputJsonValue } from "../../types";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type InterviewSessionCreateInput = {
  sessionDate?: Date | null;
  transcript?: InputJsonValue;
  overallScore?: number | null;
  candidate?: CandidateWhereUniqueInput | null;
};
