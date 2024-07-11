import { JsonValue } from "type-fest";
import { Candidate } from "../candidate/Candidate";

export type InterviewSession = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionDate: Date | null;
  transcript: JsonValue;
  overallScore: number | null;
  candidate?: Candidate | null;
};
