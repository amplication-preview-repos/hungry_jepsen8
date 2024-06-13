import { MoveUpdateManyWithoutPlayersInput } from "./MoveUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  currentGame?: string | null;
  moves?: MoveUpdateManyWithoutPlayersInput;
  playerName?: string | null;
  score?: number | null;
};
