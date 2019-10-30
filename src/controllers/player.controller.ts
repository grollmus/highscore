import { Controller, Get, Req, Post, Body, Param, Delete } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { CreatePlayerCommand } from '../commands/player/create-player.command';

@Controller('players')
export class PlayerController {

    constructor(private readonly playerService: PlayerService) {}

    @Post('')
    async create(@Body() createBox: CreatePlayerCommand) {
        return await this.playerService.create(createBox);
    }

    @Get('')
    async get() {
        return await this.playerService.get();
    }

    @Delete(':playerId')
    async delete(@Param('playerId') playerId) {
        return await this.playerService.delete(playerId);
    }
}