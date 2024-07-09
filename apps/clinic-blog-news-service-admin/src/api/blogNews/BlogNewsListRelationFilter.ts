import { BlogNewsWhereInput } from "./BlogNewsWhereInput";

export type BlogNewsListRelationFilter = {
  every?: BlogNewsWhereInput;
  some?: BlogNewsWhereInput;
  none?: BlogNewsWhereInput;
};
