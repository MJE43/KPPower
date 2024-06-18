import { SortOrder } from "../../util/SortOrder";

export type ServiceAreaOrderByInput = {
  areaName?: SortOrder;
  areaZipCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mapUrl?: SortOrder;
  updatedAt?: SortOrder;
};
