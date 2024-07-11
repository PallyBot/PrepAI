import { ScanResultCreateNestedManyWithoutResumesInput } from "./ScanResultCreateNestedManyWithoutResumesInput";

export type ResumeCreateInput = {
  name?: string | null;
  fileUrl?: string | null;
  timestamp?: Date | null;
  scanResults?: ScanResultCreateNestedManyWithoutResumesInput;
};
