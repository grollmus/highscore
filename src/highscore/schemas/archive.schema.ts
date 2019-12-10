import * as mongoose from 'mongoose';
import { Archive } from '../interfaces/archive.interface';

export const ArchiveSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
  year: Number,
  players: Array,
});

export interface IArchiveModel extends Archive, mongoose.Document {}
