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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { MoveCreateNestedManyWithoutPlayersInput } from "./MoveCreateNestedManyWithoutPlayersInput";
import { Type } from "class-transformer";

@InputType()
class PlayerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentGame?: string | null;

  @ApiProperty({
    required: false,
    type: () => MoveCreateNestedManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => MoveCreateNestedManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => MoveCreateNestedManyWithoutPlayersInput, {
    nullable: true,
  })
  moves?: MoveCreateNestedManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  playerName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number | null;
}

export { PlayerCreateInput as PlayerCreateInput };
