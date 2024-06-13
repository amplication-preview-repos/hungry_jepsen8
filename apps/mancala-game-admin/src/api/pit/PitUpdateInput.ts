import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { MoveUpdateManyWithoutPitsInput } from "./MoveUpdateManyWithoutPitsInput";

export type PitUpdateInput = {
  game?: GameWhereUniqueInput | null;
  moves?: MoveUpdateManyWithoutPitsInput;
  pitIndex?: number | null;
  stones?: number | null;
};
