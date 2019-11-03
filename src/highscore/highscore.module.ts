import { Module } from '@nestjs/common';
import { HighscoreController } from './highscore.controller';
import { ScoreService } from './services/score.service';
import { PlayerSchema } from './schemas/player.schema';
import { ScoreSchema } from './schemas/score.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerService } from './services/player.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PlayerModel', schema: PlayerSchema },
      { name: 'ScoreModel', schema: ScoreSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  controllers: [HighscoreController],
  providers: [PlayerService, ScoreService],
})
export class HighscoreModule {}
