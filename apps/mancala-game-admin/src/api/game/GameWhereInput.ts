import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PitListRelationFilter } from "../pit/PitListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWhereInput = {
  currentPlayer?: IntNullableFilter;
  id?: StringFilter;
  pits?: PitListRelationFilter;
  status?: StringNullableFilter;
};
