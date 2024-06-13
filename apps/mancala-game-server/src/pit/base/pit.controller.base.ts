/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PitService } from "../pit.service";
import { PitCreateInput } from "./PitCreateInput";
import { Pit } from "./Pit";
import { PitFindManyArgs } from "./PitFindManyArgs";
import { PitWhereUniqueInput } from "./PitWhereUniqueInput";
import { PitUpdateInput } from "./PitUpdateInput";
import { MoveFindManyArgs } from "../../move/base/MoveFindManyArgs";
import { Move } from "../../move/base/Move";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";

export class PitControllerBase {
  constructor(protected readonly service: PitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pit })
  async createPit(@common.Body() data: PitCreateInput): Promise<Pit> {
    return await this.service.createPit({
      data: {
        ...data,

        game: data.game
          ? {
              connect: data.game,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        pitIndex: true,
        stones: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pit] })
  @ApiNestedQuery(PitFindManyArgs)
  async pits(@common.Req() request: Request): Promise<Pit[]> {
    const args = plainToClass(PitFindManyArgs, request.query);
    return this.service.pits({
      ...args,
      select: {
        createdAt: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        pitIndex: true,
        stones: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pit(@common.Param() params: PitWhereUniqueInput): Promise<Pit | null> {
    const result = await this.service.pit({
      where: params,
      select: {
        createdAt: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        pitIndex: true,
        stones: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePit(
    @common.Param() params: PitWhereUniqueInput,
    @common.Body() data: PitUpdateInput
  ): Promise<Pit | null> {
    try {
      return await this.service.updatePit({
        where: params,
        data: {
          ...data,

          game: data.game
            ? {
                connect: data.game,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          game: {
            select: {
              id: true,
            },
          },

          id: true,
          pitIndex: true,
          stones: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePit(
    @common.Param() params: PitWhereUniqueInput
  ): Promise<Pit | null> {
    try {
      return await this.service.deletePit({
        where: params,
        select: {
          createdAt: true,

          game: {
            select: {
              id: true,
            },
          },

          id: true,
          pitIndex: true,
          stones: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/moves")
  @ApiNestedQuery(MoveFindManyArgs)
  async findMoves(
    @common.Req() request: Request,
    @common.Param() params: PitWhereUniqueInput
  ): Promise<Move[]> {
    const query = plainToClass(MoveFindManyArgs, request.query);
    const results = await this.service.findMoves(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        pit: {
          select: {
            id: true,
          },
        },

        player: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/moves")
  async connectMoves(
    @common.Param() params: PitWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        connect: body,
      },
    };
    await this.service.updatePit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/moves")
  async updateMoves(
    @common.Param() params: PitWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        set: body,
      },
    };
    await this.service.updatePit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/moves")
  async disconnectMoves(
    @common.Param() params: PitWhereUniqueInput,
    @common.Body() body: MoveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      moves: {
        disconnect: body,
      },
    };
    await this.service.updatePit({
      where: params,
      data,
      select: { id: true },
    });
  }
}
