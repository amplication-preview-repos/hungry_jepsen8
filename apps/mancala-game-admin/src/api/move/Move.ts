import { Pit } from "../pit/Pit";
import { Player } from "../player/Player";

export type Move = {
  createdAt: Date;
  id: string;
  pit?: Pit | null;
  player?: Player | null;
  timestamp: Date | null;
  updatedAt: Date;
};
