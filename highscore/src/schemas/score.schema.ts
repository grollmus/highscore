import * as mongoose from 'mongoose';
import { Score } from 'interfaces/score.interface';
import { Document } from 'mongoose';

export const ScoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true,
        min: 1,
    },
    reason: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});

export interface IScoreModel extends Score, Document {

}
