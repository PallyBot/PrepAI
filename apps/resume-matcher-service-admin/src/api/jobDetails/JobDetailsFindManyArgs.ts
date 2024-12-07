import { JobDetailsWhereInput } from "./JobDetailsWhereInput";
import { JobDetailsOrderByInput } from "./JobDetailsOrderByInput";

export type JobDetailsFindManyArgs = {
  where?: JobDetailsWhereInput;
  orderBy?: Array<JobDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
