import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";

export type InterviewSessionWhereInput = {
  id?: StringFilter;
  sessionDate?: DateTimeNullableFilter;
  transcript?: JsonFilter;
  overallScore?: IntNullableFilter;
  candidate?: CandidateWhereUniqueInput;
};
