import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactFormService } from "./contactForm.service";
import { ContactFormControllerBase } from "./base/contactForm.controller.base";

@swagger.ApiTags("contactForms")
@common.Controller("contactForms")
export class ContactFormController extends ContactFormControllerBase {
  constructor(protected readonly service: ContactFormService) {
    super(service);
  }
}
