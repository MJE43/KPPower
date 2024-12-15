import { InputJsonValue } from "../../types";

export type PhotoGalleryCreateInput = {
  description?: string | null;
  imageUrl?: InputJsonValue;
  title?: string | null;
};
