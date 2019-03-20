import * as mongoose from 'mongoose';
import { ScoreSchema } from './score.schema';

export const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
        validate: {
            validator: function(value) {
                return value.length === 3;
            },
        },
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


