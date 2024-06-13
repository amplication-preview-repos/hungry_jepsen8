import { Move as TMove } from "../api/move/Move";

export const MOVE_TITLE_FIELD = "id";

export const MoveTitle = (record: TMove): string => {
  return record.id?.toString() || String(record.id);
};
