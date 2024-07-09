import { BlogNewsWhereInput } from "./BlogNewsWhereInput";
import { BlogNewsOrderByInput } from "./BlogNewsOrderByInput";

export type BlogNewsFindManyArgs = {
  where?: BlogNewsWhereInput;
  orderBy?: Array<BlogNewsOrderByInput>;
  skip?: number;
  take?: number;
};
