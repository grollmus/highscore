import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IScoreModel } from '../schemas/score.schema';
import { IPlayerModel } from '../schemas/player.schema';
import { CreateScoreDto } from '../dto/create-score.dto';

@Injectable()
export class ScoreService {
  constructor(
    @InjectModel('PlayerModel')
    private readonly playerModel: Model<IPlayerModel>,
    @InjectModel('ScoreModel')
    private readonly scoreModel: Model<IScoreModel>,
  ) {}

  async create(playerId: string, command: CreateScoreDto) {
    const player = await this.playerModel.findById(playerId).exec();
    player.scores.push(new this.scoreModel(command));
    return await player.save();
  }

  async get(playerId: string) {
    const player = await this.playerModel.findOne(playerId).exec();
    return player.scores;
  }
}
