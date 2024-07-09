import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlogNewsWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
  link?: StringNullableFilter;
  description?: StringNullableFilter;
};
