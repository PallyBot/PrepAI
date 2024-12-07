import * as graphql from "@nestjs/graphql";
import { JobDetailsResolverBase } from "./base/jobDetails.resolver.base";
import { JobDetails } from "./base/JobDetails";
import { JobDetailsService } from "./jobDetails.service";

@graphql.Resolver(() => JobDetails)
export class JobDetailsResolver extends JobDetailsResolverBase {
  constructor(protected readonly service: JobDetailsService) {
    super(service);
  }
}
