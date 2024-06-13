import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PitServiceBase } from "./base/pit.service.base";

@Injectable()
export class PitService extends PitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
