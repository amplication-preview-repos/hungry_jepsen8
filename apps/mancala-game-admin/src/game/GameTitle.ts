import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "status";

export const GameTitle = (record: TGame): string => {
  return record.status?.toString() || String(record.id);
};
