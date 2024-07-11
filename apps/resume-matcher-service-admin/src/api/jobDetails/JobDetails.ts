export type JobDetails = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  interviewType: string | null;
  language: string | null;
};
