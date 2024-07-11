import { InterviewSession } from "../interviewSession/InterviewSession";

export type Candidate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  cvText: string | null;
  cvFileUrl: string | null;
  interviewSessions?: Array<InterviewSession>;
};
