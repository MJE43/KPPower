import { Module } from "@nestjs/common";
import { ContactFormModuleBase } from "./base/contactForm.module.base";
import { ContactFormService } from "./contactForm.service";
import { ContactFormController } from "./contactForm.controller";
import { ContactFormResolver } from "./contactForm.resolver";

@Module({
  imports: [ContactFormModuleBase],
  controllers: [ContactFormController],
  providers: [ContactFormService, ContactFormResolver],
  exports: [ContactFormService],
})
export class ContactFormModule {}
