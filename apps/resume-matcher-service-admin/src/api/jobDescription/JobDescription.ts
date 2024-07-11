import { ScanResult } from "../scanResult/ScanResult";

export type JobDescription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  location: string | null;
  title: string | null;
  postedDate: Date | null;
  scanResults?: Array<ScanResult>;
};
