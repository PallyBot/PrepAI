import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterviewSessionServiceBase } from "./base/interviewSession.service.base";

@Injectable()
export class InterviewSessionService extends InterviewSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
