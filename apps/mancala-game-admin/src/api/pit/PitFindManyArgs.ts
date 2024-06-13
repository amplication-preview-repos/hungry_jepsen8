import { PitWhereInput } from "./PitWhereInput";
import { PitOrderByInput } from "./PitOrderByInput";

export type PitFindManyArgs = {
  where?: PitWhereInput;
  orderBy?: Array<PitOrderByInput>;
  skip?: number;
  take?: number;
};
