/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobDetailsWhereInput } from "./JobDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobDetailsOrderByInput } from "./JobDetailsOrderByInput";

@ArgsType()
class JobDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobDetailsWhereInput, { nullable: true })
  @Type(() => JobDetailsWhereInput)
  where?: JobDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [JobDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobDetailsOrderByInput], { nullable: true })
  @Type(() => JobDetailsOrderByInput)
  orderBy?: Array<JobDetailsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobDetailsFindManyArgs as JobDetailsFindManyArgs };