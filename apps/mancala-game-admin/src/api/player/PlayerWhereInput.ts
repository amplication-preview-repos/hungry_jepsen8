import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoveListRelationFilter } from "../move/MoveListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PlayerWhereInput = {
  currentGame?: StringNullableFilter;
  id?: StringFilter;
  moves?: MoveListRelationFilter;
  playerName?: StringNullableFilter;
  score?: IntNullableFilter;
};
