import { StringFilter } from "../../util/StringFilter";
import { PitWhereUniqueInput } from "../pit/PitWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MoveWhereInput = {
  id?: StringFilter;
  pit?: PitWhereUniqueInput;
  player?: PlayerWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
