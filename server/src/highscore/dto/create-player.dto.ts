import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 3)
  name: string;
}
