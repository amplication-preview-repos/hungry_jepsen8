import { Move } from "../move/Move";

export type Player = {
  createdAt: Date;
  currentGame: string | null;
  id: string;
  moves?: Array<Move>;
  playerName: string | null;
  score: number | null;
  updatedAt: Date;
};
