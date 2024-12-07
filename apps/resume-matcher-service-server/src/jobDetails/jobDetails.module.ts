import { Module } from "@nestjs/common";
import { JobDetailsModuleBase } from "./base/jobDetails.module.base";
import { JobDetailsService } from "./jobDetails.service";
import { JobDetailsController } from "./jobDetails.controller";
import { JobDetailsResolver } from "./jobDetails.resolver";

@Module({
  imports: [JobDetailsModuleBase],
  controllers: [JobDetailsController],
  providers: [JobDetailsService, JobDetailsResolver],
  exports: [JobDetailsService],
})
export class JobDetailsModule {}
