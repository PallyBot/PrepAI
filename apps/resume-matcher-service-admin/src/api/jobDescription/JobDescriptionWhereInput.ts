import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScanResultListRelationFilter } from "../scanResult/ScanResultListRelationFilter";

export type JobDescriptionWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  title?: StringNullableFilter;
  postedDate?: DateTimeNullableFilter;
  scanResults?: ScanResultListRelationFilter;
};
