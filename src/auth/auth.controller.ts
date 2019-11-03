import { Controller, Post, Body } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiUseTags('auth')
  @Post()
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.validateUserByPassword(loginUserDto);
  }
}
