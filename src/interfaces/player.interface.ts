import { Score } from './score.interface';

export interface Player {
    name: string;
    scores: Score[];
    dateCreated: Date;
    totalScore: number;
}
