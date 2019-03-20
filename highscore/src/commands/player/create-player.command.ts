import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreatePlayerCommand {
    @IsNotEmpty()
    @Length(1, 3)
    name: string;
}
