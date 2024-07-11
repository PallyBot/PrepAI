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
import { JobDetails } from "./JobDetails";
import { JobDetailsCountArgs } from "./JobDetailsCountArgs";
import { JobDetailsFindManyArgs } from "./JobDetailsFindManyArgs";
import { JobDetailsFindUniqueArgs } from "./JobDetailsFindUniqueArgs";
import { CreateJobDetailsArgs } from "./CreateJobDetailsArgs";
import { UpdateJobDetailsArgs } from "./UpdateJobDetailsArgs";
import { DeleteJobDetailsArgs } from "./DeleteJobDetailsArgs";
import { JobDetailsService } from "../jobDetails.service";
@graphql.Resolver(() => JobDetails)
export class JobDetailsResolverBase {
  constructor(protected readonly service: JobDetailsService) {}

  async _jobDetailsItemsMeta(
    @graphql.Args() args: JobDetailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JobDetails])
  async jobDetailsItems(
    @graphql.Args() args: JobDetailsFindManyArgs
  ): Promise<JobDetails[]> {
    return this.service.jobDetailsItems(args);
  }

  @graphql.Query(() => JobDetails, { nullable: true })
  async jobDetails(
    @graphql.Args() args: JobDetailsFindUniqueArgs
  ): Promise<JobDetails | null> {
    const result = await this.service.jobDetails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JobDetails)
  async createJobDetails(
    @graphql.Args() args: CreateJobDetailsArgs
  ): Promise<JobDetails> {
    return await this.service.createJobDetails({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => JobDetails)
  async updateJobDetails(
    @graphql.Args() args: UpdateJobDetailsArgs
  ): Promise<JobDetails | null> {
    try {
      return await this.service.updateJobDetails({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => JobDetails)
  async deleteJobDetails(
    @graphql.Args() args: DeleteJobDetailsArgs
  ): Promise<JobDetails | null> {
    try {
      return await this.service.deleteJobDetails(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}