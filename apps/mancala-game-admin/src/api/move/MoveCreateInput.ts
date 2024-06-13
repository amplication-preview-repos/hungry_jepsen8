import { PitWhereUniqueInput } from "../pit/PitWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type MoveCreateInput = {
  pit?: PitWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  timestamp?: Date | null;
};
