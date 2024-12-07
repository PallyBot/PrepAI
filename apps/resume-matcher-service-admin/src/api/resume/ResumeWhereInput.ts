import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScanResultListRelationFilter } from "../scanResult/ScanResultListRelationFilter";

export type ResumeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  scanResults?: ScanResultListRelationFilter;
};
