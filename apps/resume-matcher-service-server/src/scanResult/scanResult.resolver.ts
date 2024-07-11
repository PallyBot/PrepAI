import * as graphql from "@nestjs/graphql";
import { ScanResultResolverBase } from "./base/scanResult.resolver.base";
import { ScanResult } from "./base/ScanResult";
import { ScanResultService } from "./scanResult.service";

@graphql.Resolver(() => ScanResult)
export class ScanResultResolver extends ScanResultResolverBase {
  constructor(protected readonly service: ScanResultService) {
    super(service);
  }
}
