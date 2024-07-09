import { InputJsonValue } from "../../types";

export type BlogNewsCreateInput = {
  image?: InputJsonValue;
  title?: string | null;
  link?: string | null;
  description?: string | null;
};
