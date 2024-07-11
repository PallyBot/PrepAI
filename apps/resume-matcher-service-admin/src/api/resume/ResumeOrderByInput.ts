import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  fileUrl?: SortOrder;
  timestamp?: SortOrder;
};
