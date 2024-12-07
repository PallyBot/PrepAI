import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobDetailsService } from "./jobDetails.service";
import { JobDetailsControllerBase } from "./base/jobDetails.controller.base";

@swagger.ApiTags("jobDetails")
@common.Controller("jobDetails")
export class JobDetailsController extends JobDetailsControllerBase {
  constructor(protected readonly service: JobDetailsService) {
    super(service);
  }
}
