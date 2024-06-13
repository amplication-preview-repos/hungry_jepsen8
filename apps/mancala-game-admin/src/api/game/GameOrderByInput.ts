import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  currentPlayer?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
