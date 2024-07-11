import { InterviewSessionCreateNestedManyWithoutCandidatesInput } from "./InterviewSessionCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  name?: string | null;
  email?: string | null;
  cvText?: string | null;
  cvFileUrl?: string | null;
  interviewSessions?: InterviewSessionCreateNestedManyWithoutCandidatesInput;
};
