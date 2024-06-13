import { PitCreateNestedManyWithoutGamesInput } from "./PitCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  currentPlayer?: number | null;
  pits?: PitCreateNestedManyWithoutGamesInput;
  status?: string | null;
};
