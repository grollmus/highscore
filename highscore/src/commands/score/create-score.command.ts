import { IsNotEmpty, Min } from 'class-validator';

export class CreateScoreCommand {
    @IsNotEmpty()
    @Min(1)
    score: number;

    reason: string;
}
