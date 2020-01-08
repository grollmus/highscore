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
import { ScoreService } from './services/score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { CreateArchiveDto } from './dto/create-archive.dto';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ArchiveService } from './services/archive.service';

@Controller('highscore')
export class HighscoreController {
  constructor(
    private readonly archiveService: ArchiveService,
    private readonly playerService: PlayerService,
    private readonly scoreService: ScoreService,
  ) {}

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Post('players')
  async createPlayer(@Body() createBox: CreatePlayerDto[]) {
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

  @ApiUseTags('highscore')
  @Get('players/names')
  async getPlayerNames() {
    return await this.playerService.getNames();
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Post('players/:playerName/scores')
  async createPlayerScore(
    @Param('playerName') playerName: string,
    @Body() score: CreateScoreDto,
  ) {
    return await this.scoreService.create(playerName, score);
  }

  @ApiUseTags('highscore')
  @Get('players/:playerId/scores')
  async getPlayerScore(@Param('playerId') playerId: string) {
    return await this.scoreService.get(playerId);
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Delete('score/:playerId/:scoreId')
  async deleteScoreFromPlayer(
    @Param('playerId') playerId: string,
    @Param('scoreId') scoreId: string,
  ) {
    return await this.scoreService.delete(playerId, scoreId);
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @UseGuards(AuthGuard())
  @Post('archive')
  async archive(@Body() createArchive: CreateArchiveDto) {
    return await this.archiveService.archive(createArchive);
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @Get('archive')
  async getArchives() {
    return await this.archiveService.getArchives();
  }

  @ApiBearerAuth()
  @ApiUseTags('highscore')
  @Get('archive/:archiveId')
  async getArchiveById(@Param('archiveId') archiveId: string) {
    return await this.archiveService.getArchiveById(archiveId);
  }
}
