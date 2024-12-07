import { JobDetails as TJobDetails } from "../api/jobDetails/JobDetails";

export const JOBDETAILS_TITLE_FIELD = "title";

export const JobDetailsTitle = (record: TJobDetails): string => {
  return record.title?.toString() || String(record.id);
};
