import { SortOrder } from "../../util/SortOrder";

export type JobDescriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  postedDate?: SortOrder;
};
