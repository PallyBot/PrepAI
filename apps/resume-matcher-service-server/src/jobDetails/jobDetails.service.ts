import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobDetailsServiceBase } from "./base/jobDetails.service.base";

@Injectable()
export class JobDetailsService extends JobDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
