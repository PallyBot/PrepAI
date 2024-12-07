import { ScanResultCreateNestedManyWithoutJobDescriptionsInput } from "./ScanResultCreateNestedManyWithoutJobDescriptionsInput";

export type JobDescriptionCreateInput = {
  description?: string | null;
  location?: string | null;
  title?: string | null;
  postedDate?: Date | null;
  scanResults?: ScanResultCreateNestedManyWithoutJobDescriptionsInput;
};
