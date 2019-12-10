import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/player.interface';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { IPlayerModel } from '../schemas/player.schema';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel('PlayerModel')
    private readonly playerModel: Model<IPlayerModel>,
  ) {}

  async create(command: CreatePlayerDto[]): Promise<Player[]> {
    return await this.playerModel.insertMany(command);
  }

  async getNames(): Promise<any[]> {
    // const playerNames = await this.playerModel.find({}, { name: 1 });
    const playerNames = await this.playerModel.distinct('name');
    return playerNames;
  }

  async get(): Promise<Player[]> {
    const players = await this.playerModel.find();
    return players;
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.playerModel.findByIdAndDelete(id).exec();
    return !!deleted;
  }
  async dropCollection() {
    return await this.playerModel.collection.drop();
  }
}
