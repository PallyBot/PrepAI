import { InterviewSessionUpdateManyWithoutCandidatesInput } from "./InterviewSessionUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  name?: string | null;
  email?: string | null;
  cvText?: string | null;
  cvFileUrl?: string | null;
  interviewSessions?: InterviewSessionUpdateManyWithoutCandidatesInput;
};
