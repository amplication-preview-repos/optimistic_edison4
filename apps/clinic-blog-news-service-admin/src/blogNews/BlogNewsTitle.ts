import { BlogNews as TBlogNews } from "../api/blogNews/BlogNews";

export const BLOGNEWS_TITLE_FIELD = "title";

export const BlogNewsTitle = (record: TBlogNews): string => {
  return record.title?.toString() || String(record.id);
};
