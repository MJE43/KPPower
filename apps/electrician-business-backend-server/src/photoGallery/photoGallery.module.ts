import { Module } from "@nestjs/common";
import { PhotoGalleryModuleBase } from "./base/photoGallery.module.base";
import { PhotoGalleryService } from "./photoGallery.service";
import { PhotoGalleryController } from "./photoGallery.controller";
import { PhotoGalleryResolver } from "./photoGallery.resolver";

@Module({
  imports: [PhotoGalleryModuleBase],
  controllers: [PhotoGalleryController],
  providers: [PhotoGalleryService, PhotoGalleryResolver],
  exports: [PhotoGalleryService],
})
export class PhotoGalleryModule {}
