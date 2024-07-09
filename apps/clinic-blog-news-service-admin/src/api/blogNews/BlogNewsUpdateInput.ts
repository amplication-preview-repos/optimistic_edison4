import { InputJsonValue } from "../../types";

export type BlogNewsUpdateInput = {
  image?: InputJsonValue;
  title?: string | null;
  link?: string | null;
  description?: string | null;
};
