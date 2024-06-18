import { InputJsonValue } from "../../types";

export type PhotoGalleryUpdateInput = {
  description?: string | null;
  imageUrl?: InputJsonValue;
  title?: string | null;
};
