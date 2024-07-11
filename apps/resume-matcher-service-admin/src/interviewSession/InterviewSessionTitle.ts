import { InterviewSession as TInterviewSession } from "../api/interviewSession/InterviewSession";

export const INTERVIEWSESSION_TITLE_FIELD = "id";

export const InterviewSessionTitle = (record: TInterviewSession): string => {
  return record.id?.toString() || String(record.id);
};
