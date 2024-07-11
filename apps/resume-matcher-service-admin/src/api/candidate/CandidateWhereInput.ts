import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InterviewSessionListRelationFilter } from "../interviewSession/InterviewSessionListRelationFilter";

export type CandidateWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  cvText?: StringNullableFilter;
  cvFileUrl?: StringNullableFilter;
  interviewSessions?: InterviewSessionListRelationFilter;
};
