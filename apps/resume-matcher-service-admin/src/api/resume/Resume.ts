import { ScanResult } from "../scanResult/ScanResult";

export type Resume = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  fileUrl: string | null;
  timestamp: Date | null;
  scanResults?: Array<ScanResult>;
};
