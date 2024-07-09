import { SortOrder } from "../../util/SortOrder";

export type BlogNewsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  image?: SortOrder;
  title?: SortOrder;
  link?: SortOrder;
  description?: SortOrder;
};
