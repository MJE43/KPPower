import { Module } from "@nestjs/common";
import { ServiceAreaModuleBase } from "./base/serviceArea.module.base";
import { ServiceAreaService } from "./serviceArea.service";
import { ServiceAreaController } from "./serviceArea.controller";
import { ServiceAreaResolver } from "./serviceArea.resolver";

@Module({
  imports: [ServiceAreaModuleBase],
  controllers: [ServiceAreaController],
  providers: [ServiceAreaService, ServiceAreaResolver],
  exports: [ServiceAreaService],
})
export class ServiceAreaModule {}
