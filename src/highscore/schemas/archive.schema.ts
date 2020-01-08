import * as mongoose from 'mongoose';
import { Archive } from '../interfaces/archive.interface';
import { PlayerSchema } from './player.schema';

export const ArchiveSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
  year: Number,
  players: [PlayerSchema],
});

export interface IArchiveModel extends Archive, mongoose.Document {}
