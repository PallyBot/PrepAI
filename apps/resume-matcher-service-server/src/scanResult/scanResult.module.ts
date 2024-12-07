import { Module } from "@nestjs/common";
import { ScanResultModuleBase } from "./base/scanResult.module.base";
import { ScanResultService } from "./scanResult.service";
import { ScanResultController } from "./scanResult.controller";
import { ScanResultResolver } from "./scanResult.resolver";

@Module({
  imports: [ScanResultModuleBase],
  controllers: [ScanResultController],
  providers: [ScanResultService, ScanResultResolver],
  exports: [ScanResultService],
})
export class ScanResultModule {}
