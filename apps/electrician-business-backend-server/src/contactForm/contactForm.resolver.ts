import * as graphql from "@nestjs/graphql";
import { ContactFormResolverBase } from "./base/contactForm.resolver.base";
import { ContactForm } from "./base/ContactForm";
import { ContactFormService } from "./contactForm.service";

@graphql.Resolver(() => ContactForm)
export class ContactFormResolver extends ContactFormResolverBase {
  constructor(protected readonly service: ContactFormService) {
    super(service);
  }
}
