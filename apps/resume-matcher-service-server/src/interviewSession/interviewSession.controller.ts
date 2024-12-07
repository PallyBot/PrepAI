import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InterviewSessionService } from "./interviewSession.service";
import { InterviewSessionControllerBase } from "./base/interviewSession.controller.base";

@swagger.ApiTags("interviewSessions")
@common.Controller("interviewSessions")
export class InterviewSessionController extends InterviewSessionControllerBase {
  constructor(protected readonly service: InterviewSessionService) {
    super(service);
  }
}
