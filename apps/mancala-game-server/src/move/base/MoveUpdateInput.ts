/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PitWhereUniqueInput } from "../../pit/base/PitWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class MoveUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PitWhereUniqueInput)
  @IsOptional()
  @Field(() => PitWhereUniqueInput, {
    nullable: true,
  })
  pit?: PitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { MoveUpdateInput as MoveUpdateInput };
