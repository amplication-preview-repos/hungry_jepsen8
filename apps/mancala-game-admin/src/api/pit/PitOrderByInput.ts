import { SortOrder } from "../../util/SortOrder";

export type PitOrderByInput = {
  createdAt?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  pitIndex?: SortOrder;
  stones?: SortOrder;
  updatedAt?: SortOrder;
};
