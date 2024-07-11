import { InterviewSessionWhereInput } from "./InterviewSessionWhereInput";
import { InterviewSessionOrderByInput } from "./InterviewSessionOrderByInput";

export type InterviewSessionFindManyArgs = {
  where?: InterviewSessionWhereInput;
  orderBy?: Array<InterviewSessionOrderByInput>;
  skip?: number;
  take?: number;
};
