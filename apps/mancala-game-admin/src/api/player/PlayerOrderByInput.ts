import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  currentGame?: SortOrder;
  id?: SortOrder;
  playerName?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
