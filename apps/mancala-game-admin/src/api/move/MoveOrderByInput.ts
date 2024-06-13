import { SortOrder } from "../../util/SortOrder";

export type MoveOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pitId?: SortOrder;
  playerId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
