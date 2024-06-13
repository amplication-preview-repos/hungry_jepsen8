import { Pit as TPit } from "../api/pit/Pit";

export const PIT_TITLE_FIELD = "id";

export const PitTitle = (record: TPit): string => {
  return record.id?.toString() || String(record.id);
};
