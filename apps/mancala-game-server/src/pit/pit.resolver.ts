import * as graphql from "@nestjs/graphql";
import { PitResolverBase } from "./base/pit.resolver.base";
import { Pit } from "./base/Pit";
import { PitService } from "./pit.service";

@graphql.Resolver(() => Pit)
export class PitResolver extends PitResolverBase {
  constructor(protected readonly service: PitService) {
    super(service);
  }
}
