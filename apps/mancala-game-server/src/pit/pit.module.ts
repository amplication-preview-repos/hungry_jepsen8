import { Module } from "@nestjs/common";
import { PitModuleBase } from "./base/pit.module.base";
import { PitService } from "./pit.service";
import { PitController } from "./pit.controller";
import { PitResolver } from "./pit.resolver";

@Module({
  imports: [PitModuleBase],
  controllers: [PitController],
  providers: [PitService, PitResolver],
  exports: [PitService],
})
export class PitModule {}
