import { Player } from './player.interface';

export interface Archive {
  name: string;
  year: number;
  players: [Player];
}
