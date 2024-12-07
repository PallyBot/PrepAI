import { ScanResultUpdateManyWithoutResumesInput } from "./ScanResultUpdateManyWithoutResumesInput";

export type ResumeUpdateInput = {
  name?: string | null;
  fileUrl?: string | null;
  timestamp?: Date | null;
  scanResults?: ScanResultUpdateManyWithoutResumesInput;
};
