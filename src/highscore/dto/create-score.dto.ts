import { IsNotEmpty, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateScoreDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @Min(1)
  score: number;
  @ApiModelProperty()
  reason: string;
}
