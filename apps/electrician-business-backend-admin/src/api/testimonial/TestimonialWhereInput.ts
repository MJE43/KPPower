import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TestimonialWhereInput = {
  customerName?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  testimonialText?: StringNullableFilter;
};
