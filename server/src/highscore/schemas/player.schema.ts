import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ScoreSchema } from './score.schema';
import { Player } from '../interfaces/player.interface';

export const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    validate: {
      validator: value => {
        return value.length === 3;
      },
    },
    set: (value: string) => value.toUpperCase(),
  },
  scores: {
    type: [ScoreSchema],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

PlayerSchema.virtual('totalScore').get(function() {
  if (this.scores && this.scores.length) {
    return this.scores.map(s => s.score).reduce((acc, value) => acc + value);
  } else {
    return 0;
  }
});

PlayerSchema.set('toJSON', { virtuals: true });

export interface IPlayerModel extends Player, Document {}
