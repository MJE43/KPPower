import { ServiceAreaWhereInput } from "./ServiceAreaWhereInput";
import { ServiceAreaOrderByInput } from "./ServiceAreaOrderByInput";

export type ServiceAreaFindManyArgs = {
  where?: ServiceAreaWhereInput;
  orderBy?: Array<ServiceAreaOrderByInput>;
  skip?: number;
  take?: number;
};
