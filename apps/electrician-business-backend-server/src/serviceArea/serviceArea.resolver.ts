import * as graphql from "@nestjs/graphql";
import { ServiceAreaResolverBase } from "./base/serviceArea.resolver.base";
import { ServiceArea } from "./base/ServiceArea";
import { ServiceAreaService } from "./serviceArea.service";

@graphql.Resolver(() => ServiceArea)
export class ServiceAreaResolver extends ServiceAreaResolverBase {
  constructor(protected readonly service: ServiceAreaService) {
    super(service);
  }
}
