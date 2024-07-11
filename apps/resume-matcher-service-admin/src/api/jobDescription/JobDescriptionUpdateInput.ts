import { ScanResultUpdateManyWithoutJobDescriptionsInput } from "./ScanResultUpdateManyWithoutJobDescriptionsInput";

export type JobDescriptionUpdateInput = {
  description?: string | null;
  location?: string | null;
  title?: string | null;
  postedDate?: Date | null;
  scanResults?: ScanResultUpdateManyWithoutJobDescriptionsInput;
};
