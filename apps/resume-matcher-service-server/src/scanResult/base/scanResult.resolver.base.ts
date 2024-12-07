/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ScanResult } from "./ScanResult";
import { ScanResultCountArgs } from "./ScanResultCountArgs";
import { ScanResultFindManyArgs } from "./ScanResultFindManyArgs";
import { ScanResultFindUniqueArgs } from "./ScanResultFindUniqueArgs";
import { CreateScanResultArgs } from "./CreateScanResultArgs";
import { UpdateScanResultArgs } from "./UpdateScanResultArgs";
import { DeleteScanResultArgs } from "./DeleteScanResultArgs";
import { Resume } from "../../resume/base/Resume";
import { JobDescription } from "../../jobDescription/base/JobDescription";
import { ResumeMatchInput } from "../ResumeMatchInput";
import { ResumeMatchOutput } from "../ResumeMatchOutput";
import { ScanResultService } from "../scanResult.service";
@graphql.Resolver(() => ScanResult)
export class ScanResultResolverBase {
  constructor(protected readonly service: ScanResultService) {}

  async _scanResultsMeta(
    @graphql.Args() args: ScanResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ScanResult])
  async scanResults(
    @graphql.Args() args: ScanResultFindManyArgs
  ): Promise<ScanResult[]> {
    return this.service.scanResults(args);
  }

  @graphql.Query(() => ScanResult, { nullable: true })
  async scanResult(
    @graphql.Args() args: ScanResultFindUniqueArgs
  ): Promise<ScanResult | null> {
    const result = await this.service.scanResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ScanResult)
  async createScanResult(
    @graphql.Args() args: CreateScanResultArgs
  ): Promise<ScanResult> {
    return await this.service.createScanResult({
      ...args,
      data: {
        ...args.data,

        resume: args.data.resume
          ? {
              connect: args.data.resume,
            }
          : undefined,

        jobDescription: args.data.jobDescription
          ? {
              connect: args.data.jobDescription,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ScanResult)
  async updateScanResult(
    @graphql.Args() args: UpdateScanResultArgs
  ): Promise<ScanResult | null> {
    try {
      return await this.service.updateScanResult({
        ...args,
        data: {
          ...args.data,

          resume: args.data.resume
            ? {
                connect: args.data.resume,
              }
            : undefined,

          jobDescription: args.data.jobDescription
            ? {
                connect: args.data.jobDescription,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ScanResult)
  async deleteScanResult(
    @graphql.Args() args: DeleteScanResultArgs
  ): Promise<ScanResult | null> {
    try {
      return await this.service.deleteScanResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Resume, {
    nullable: true,
    name: "resume",
  })
  async getResume(
    @graphql.Parent() parent: ScanResult
  ): Promise<Resume | null> {
    const result = await this.service.getResume(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => JobDescription, {
    nullable: true,
    name: "jobDescription",
  })
  async getJobDescription(
    @graphql.Parent() parent: ScanResult
  ): Promise<JobDescription | null> {
    const result = await this.service.getJobDescription(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ResumeMatchOutput)
  async GenerateResumeMatchScore(
    @graphql.Args()
    args: ResumeMatchInput
  ): Promise<ResumeMatchOutput> {
    return this.service.GenerateResumeMatchScore(args);
  }
}
