import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publicationDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
