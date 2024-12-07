import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobDescriptionService } from "./jobDescription.service";
import { JobDescriptionControllerBase } from "./base/jobDescription.controller.base";

@swagger.ApiTags("jobDescriptions")
@common.Controller("jobDescriptions")
export class JobDescriptionController extends JobDescriptionControllerBase {
  constructor(protected readonly service: JobDescriptionService) {
    super(service);
  }
}
