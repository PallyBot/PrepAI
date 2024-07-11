import { Module } from "@nestjs/common";
import { JobDescriptionModuleBase } from "./base/jobDescription.module.base";
import { JobDescriptionService } from "./jobDescription.service";
import { JobDescriptionController } from "./jobDescription.controller";
import { JobDescriptionResolver } from "./jobDescription.resolver";

@Module({
  imports: [JobDescriptionModuleBase],
  controllers: [JobDescriptionController],
  providers: [JobDescriptionService, JobDescriptionResolver],
  exports: [JobDescriptionService],
})
export class JobDescriptionModule {}
