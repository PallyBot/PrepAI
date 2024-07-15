import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
