import * as graphql from "@nestjs/graphql";
import { JobDescriptionResolverBase } from "./base/jobDescription.resolver.base";
import { JobDescription } from "./base/JobDescription";
import { JobDescriptionService } from "./jobDescription.service";

@graphql.Resolver(() => JobDescription)
export class JobDescriptionResolver extends JobDescriptionResolverBase {
  constructor(protected readonly service: JobDescriptionService) {
    super(service);
  }
}
