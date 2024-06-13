import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { MoveCreateNestedManyWithoutPitsInput } from "./MoveCreateNestedManyWithoutPitsInput";

export type PitCreateInput = {
  game?: GameWhereUniqueInput | null;
  moves?: MoveCreateNestedManyWithoutPitsInput;
  pitIndex?: number | null;
  stones?: number | null;
};
