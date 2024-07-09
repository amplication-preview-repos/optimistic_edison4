import { JsonValue } from "type-fest";

export type BlogNews = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  image: JsonValue;
  title: string | null;
  link: string | null;
  description: string | null;
};
