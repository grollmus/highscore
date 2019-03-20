import { Controller, Get, Req, Post, Body, Param } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { CreatePlayerVm } from '../viewmodels/player/vm.create-player';

@Controller('players')
export class PlayerController {

    constructor(private readonly playerService: PlayerService) {}

    @Post('')
    async create(@Body() createBox: CreatePlayerVm) {
        return await this.playerService.create(createBox);
    }
}