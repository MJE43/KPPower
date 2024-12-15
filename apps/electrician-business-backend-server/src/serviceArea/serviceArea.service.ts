import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceAreaServiceBase } from "./base/serviceArea.service.base";

@Injectable()
export class ServiceAreaService extends ServiceAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
