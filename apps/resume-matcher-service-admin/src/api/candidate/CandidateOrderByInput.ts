import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  cvText?: SortOrder;
  cvFileUrl?: SortOrder;
};
