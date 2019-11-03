import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerService } from './services/player.service';
import { ScoreService } from 'highscore/services/score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('highscore')
export class HighscoreController {
  constructor(
    private readonly playerService: PlayerService,
    private readonly scoreService: ScoreService,
  ) {}

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Post('players')
  async createPlayer(@Body() createBox: CreatePlayerDto) {
    return await this.playerService.create(createBox);
  }

  @ApiUseTags('highscore')
  @Get('players')
  async getPlayer() {
    return await this.playerService.get();
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Delete('players/:playerId')
  async deletePlayer(@Param('playerId') playerId) {
    return await this.playerService.delete(playerId);
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Post('players/:playerId/scores')
  async createPlayerScore(
    @Param('playerId') playerId: string,
    @Body() score: CreateScoreDto,
  ) {
    return await this.scoreService.create(playerId, score);
  }

  @ApiUseTags('highscore')
  @Get('players/:playerId/scores')
  async getPlayerScore(@Param('playerId') playerId: string) {
    return await this.scoreService.get(playerId);
  }
}
