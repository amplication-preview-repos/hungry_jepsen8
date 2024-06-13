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
import { PitCreateInput } from "./PitCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePitArgs {
  @ApiProperty({
    required: true,
    type: () => PitCreateInput,
  })
  @ValidateNested()
  @Type(() => PitCreateInput)
  @Field(() => PitCreateInput, { nullable: false })
  data!: PitCreateInput;
}

export { CreatePitArgs as CreatePitArgs };
