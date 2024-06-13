import { PitUpdateManyWithoutGamesInput } from "./PitUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  currentPlayer?: number | null;
  pits?: PitUpdateManyWithoutGamesInput;
  status?: string | null;
};
