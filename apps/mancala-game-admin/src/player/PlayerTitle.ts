import { Player as TPlayer } from "../api/player/Player";

export const PLAYER_TITLE_FIELD = "playerName";

export const PlayerTitle = (record: TPlayer): string => {
  return record.playerName?.toString() || String(record.id);
};
