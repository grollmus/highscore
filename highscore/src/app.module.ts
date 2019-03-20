import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerSchema } from './schemas/player.schema';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { ScoreService } from './services/score.service';
import { ScoreController } from './controllers/score.controller';
import { ScoreSchema } from './schemas/score.schema';
import { GlobalExceptionFilter } from './filter/global-exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/highscore'),
    MongooseModule.forFeature([{
      name: 'PlayerModel', schema: PlayerSchema,
    },
    { name: 'ScoreModel', schema: ScoreSchema }]),
  ],
  controllers: [
    AppController,
    PlayerController,
    ScoreController,
  ],
  providers: [
    AppService,
    PlayerService,
    ScoreService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule { }
