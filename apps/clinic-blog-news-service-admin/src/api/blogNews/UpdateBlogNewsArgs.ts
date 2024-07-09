import { BlogNewsWhereUniqueInput } from "./BlogNewsWhereUniqueInput";
import { BlogNewsUpdateInput } from "./BlogNewsUpdateInput";

export type UpdateBlogNewsArgs = {
  where: BlogNewsWhereUniqueInput;
  data: BlogNewsUpdateInput;
};
