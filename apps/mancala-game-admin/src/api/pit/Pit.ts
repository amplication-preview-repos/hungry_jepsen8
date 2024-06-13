import { Game } from "../game/Game";
import { Move } from "../move/Move";

export type Pit = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  moves?: Array<Move>;
  pitIndex: number | null;
  stones: number | null;
  updatedAt: Date;
};
