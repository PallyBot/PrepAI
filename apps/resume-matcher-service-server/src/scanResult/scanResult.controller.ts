import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScanResultService } from "./scanResult.service";
import { ScanResultControllerBase } from "./base/scanResult.controller.base";

@swagger.ApiTags("scanResults")
@common.Controller("scanResults")
export class ScanResultController extends ScanResultControllerBase {
  constructor(protected readonly service: ScanResultService) {
    super(service);
  }
}
