import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArchiveModel } from '../schemas/archive.schema';
import { PlayerService } from './player.service';
import { CreateArchiveDto } from '../dto/create-archive.dto';

@Injectable()
export class ArchiveService {
  constructor(
    @InjectModel('ArchiveModel')
    private readonly archiveModel: Model<IArchiveModel>,
    private readonly playerService: PlayerService,
  ) {}

  async archive(createArchive: CreateArchiveDto) {
    const players = await this.playerService.get();
    return await this.archiveModel.insertMany(
      {
        name: createArchive.name,
        year: createArchive.year,
        players,
      },
      (err, doc) => {
        if (err) {
          console.error('=======', err);
          throw new InternalServerErrorException(err);
        }
        this.playerService.dropCollection();
      },
    );
  }

  async getArchives() {
    return await this.archiveModel.find();
  }

  async getArchiveById(id) {
    return await this.archiveModel.findById(id);
  }
}
