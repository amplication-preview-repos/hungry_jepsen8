import { PitWhereUniqueInput } from "../pit/PitWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type MoveUpdateInput = {
  pit?: PitWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  timestamp?: Date | null;
};
