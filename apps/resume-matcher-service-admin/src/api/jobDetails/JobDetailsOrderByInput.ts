import { SortOrder } from "../../util/SortOrder";

export type JobDetailsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  interviewType?: SortOrder;
  language?: SortOrder;
};
