import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PitService } from "./pit.service";
import { PitControllerBase } from "./base/pit.controller.base";

@swagger.ApiTags("pits")
@common.Controller("pits")
export class PitController extends PitControllerBase {
  constructor(protected readonly service: PitService) {
    super(service);
  }
}
