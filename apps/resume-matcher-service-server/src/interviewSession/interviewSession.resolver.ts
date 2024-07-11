import * as graphql from "@nestjs/graphql";
import { InterviewSessionResolverBase } from "./base/interviewSession.resolver.base";
import { InterviewSession } from "./base/InterviewSession";
import { InterviewSessionService } from "./interviewSession.service";

@graphql.Resolver(() => InterviewSession)
export class InterviewSessionResolver extends InterviewSessionResolverBase {
  constructor(protected readonly service: InterviewSessionService) {
    super(service);
  }
}
