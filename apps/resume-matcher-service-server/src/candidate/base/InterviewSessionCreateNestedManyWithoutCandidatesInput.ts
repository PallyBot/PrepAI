/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InterviewSessionWhereUniqueInput } from "../../interviewSession/base/InterviewSessionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InterviewSessionCreateNestedManyWithoutCandidatesInput {
  @Field(() => [InterviewSessionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InterviewSessionWhereUniqueInput],
  })
  connect?: Array<InterviewSessionWhereUniqueInput>;
}

export { InterviewSessionCreateNestedManyWithoutCandidatesInput as InterviewSessionCreateNestedManyWithoutCandidatesInput };