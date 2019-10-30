import { Controller, Get, Req, Post, Body, Param } from '@nestjs/common';
import { ScoreService } from '../services/score.service';
import { CreateScoreCommand } from '../commands/score/create-score.command';

@Controller('players/:playerId/scores')
export class ScoreController {

    constructor(private readonly scoreService: ScoreService) {}

    @Post('')
    async create(@Param('playerId') playerId: string, @Body() score: CreateScoreCommand) {
        return await this.scoreService.create(playerId, score);
    }

    @Get('')
    async get(@Param('playerId') playerId: string) {
        return await this.scoreService.get(playerId);
    }
}