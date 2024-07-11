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
import { InterviewSessionWhereInput } from "./InterviewSessionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InterviewSessionOrderByInput } from "./InterviewSessionOrderByInput";

@ArgsType()
class InterviewSessionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InterviewSessionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InterviewSessionWhereInput, { nullable: true })
  @Type(() => InterviewSessionWhereInput)
  where?: InterviewSessionWhereInput;

  @ApiProperty({
    required: false,
    type: [InterviewSessionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InterviewSessionOrderByInput], { nullable: true })
  @Type(() => InterviewSessionOrderByInput)
  orderBy?: Array<InterviewSessionOrderByInput>;

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

export { InterviewSessionFindManyArgs as InterviewSessionFindManyArgs };