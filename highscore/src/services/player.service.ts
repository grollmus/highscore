import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/player.interface';
import { CreatePlayerVm } from '../viewmodels/player/vm.create-player';

@Injectable()
export class PlayerService {

    constructor(@InjectModel('PlayerModel') private readonly playerModel: Model<Player>) { }

    async create(createPlayerVm: CreatePlayerVm): Promise<Player> {
        const createdPlayer = new this.playerModel(createPlayerVm);
        return await createdPlayer.save();
    }
}
