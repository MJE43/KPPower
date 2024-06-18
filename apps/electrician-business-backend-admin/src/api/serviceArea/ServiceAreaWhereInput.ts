import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServiceAreaWhereInput = {
  areaName?: StringNullableFilter;
  areaZipCode?: StringNullableFilter;
  id?: StringFilter;
  mapUrl?: StringNullableFilter;
};
