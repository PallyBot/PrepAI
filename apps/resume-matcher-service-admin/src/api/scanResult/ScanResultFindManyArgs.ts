import { ScanResultWhereInput } from "./ScanResultWhereInput";
import { ScanResultOrderByInput } from "./ScanResultOrderByInput";

export type ScanResultFindManyArgs = {
  where?: ScanResultWhereInput;
  orderBy?: Array<ScanResultOrderByInput>;
  skip?: number;
  take?: number;
};
