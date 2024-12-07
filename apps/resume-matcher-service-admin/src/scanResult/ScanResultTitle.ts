import { ScanResult as TScanResult } from "../api/scanResult/ScanResult";

export const SCANRESULT_TITLE_FIELD = "id";

export const ScanResultTitle = (record: TScanResult): string => {
  return record.id?.toString() || String(record.id);
};
