import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerSchema } from './schemas/player.schema';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/highscore'),
    MongooseModule.forFeature([{
      name: 'PlayerModel', schema: PlayerSchema,
    }]),
  ],
  controllers: [
    AppController,
    PlayerController
  ],
  providers: [
    AppService,
    PlayerService
  ],
})
export class AppModule { }
