import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceAreaService } from "./serviceArea.service";
import { ServiceAreaControllerBase } from "./base/serviceArea.controller.base";

@swagger.ApiTags("serviceAreas")
@common.Controller("serviceAreas")
export class ServiceAreaController extends ServiceAreaControllerBase {
  constructor(protected readonly service: ServiceAreaService) {
    super(service);
  }
}
