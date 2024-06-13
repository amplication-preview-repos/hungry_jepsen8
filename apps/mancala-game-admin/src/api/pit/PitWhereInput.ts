import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PitWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  pitIndex?: IntNullableFilter;
  stones?: IntNullableFilter;
};
