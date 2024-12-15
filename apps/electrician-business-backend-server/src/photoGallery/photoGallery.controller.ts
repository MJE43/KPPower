import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhotoGalleryService } from "./photoGallery.service";
import { PhotoGalleryControllerBase } from "./base/photoGallery.controller.base";

@swagger.ApiTags("photoGalleries")
@common.Controller("photoGalleries")
export class PhotoGalleryController extends PhotoGalleryControllerBase {
  constructor(protected readonly service: PhotoGalleryService) {
    super(service);
  }
}
