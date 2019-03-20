import { Score } from "./score.interface";

export interface Player {
    name: string;
    scores: Array<Score>;
    dateCreated: Date;
}

