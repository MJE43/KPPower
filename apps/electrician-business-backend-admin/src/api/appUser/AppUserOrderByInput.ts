import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
