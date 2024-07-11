import { Module } from "@nestjs/common";
import { InterviewSessionModuleBase } from "./base/interviewSession.module.base";
import { InterviewSessionService } from "./interviewSession.service";
import { InterviewSessionController } from "./interviewSession.controller";
import { InterviewSessionResolver } from "./interviewSession.resolver";

@Module({
  imports: [InterviewSessionModuleBase],
  controllers: [InterviewSessionController],
  providers: [InterviewSessionService, InterviewSessionResolver],
  exports: [InterviewSessionService],
})
export class InterviewSessionModule {}
