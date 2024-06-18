import { ServiceArea as TServiceArea } from "../api/serviceArea/ServiceArea";

export const SERVICEAREA_TITLE_FIELD = "areaName";

export const ServiceAreaTitle = (record: TServiceArea): string => {
  return record.areaName?.toString() || String(record.id);
};
