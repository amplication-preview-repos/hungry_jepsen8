import { MoveCreateNestedManyWithoutPlayersInput } from "./MoveCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  currentGame?: string | null;
  moves?: MoveCreateNestedManyWithoutPlayersInput;
  playerName?: string | null;
  score?: number | null;
};
