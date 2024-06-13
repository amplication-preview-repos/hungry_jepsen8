import { Pit } from "../pit/Pit";

export type Game = {
  createdAt: Date;
  currentPlayer: number | null;
  id: string;
  pits?: Array<Pit>;
  status: string | null;
  updatedAt: Date;
};
