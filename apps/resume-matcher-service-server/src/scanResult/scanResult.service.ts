import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScanResultServiceBase } from "./base/scanResult.service.base";

@Injectable()
export class ScanResultService extends ScanResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
