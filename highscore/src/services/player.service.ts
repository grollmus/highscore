import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/player.interface';
import { CreatePlayerCommand } from '../commands/player/create-player.command';
import { IPlayerModel } from '../schemas/player.schema';

@Injectable()
export class PlayerService {

    constructor(@InjectModel('PlayerModel') private readonly playerModel: Model<IPlayerModel>) { }

    async create(command: CreatePlayerCommand): Promise<Player> {
        const createdPlayer = new this.playerModel(command);
        return await createdPlayer.save();
    }

    async get(): Promise<Player[]> {
        const players = await this.playerModel.find().exec();
        return players;
    }

    async delete(id: string): Promise<boolean> {
        const deleted =  await this.playerModel.findByIdAndDelete(id).exec();
        return !!deleted;
    }
}
