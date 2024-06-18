import * as graphql from "@nestjs/graphql";
import { PhotoGalleryResolverBase } from "./base/photoGallery.resolver.base";
import { PhotoGallery } from "./base/PhotoGallery";
import { PhotoGalleryService } from "./photoGallery.service";

@graphql.Resolver(() => PhotoGallery)
export class PhotoGalleryResolver extends PhotoGalleryResolverBase {
  constructor(protected readonly service: PhotoGalleryService) {
    super(service);
  }
}
