import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from 'users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserByPassword(loginAttempt: LoginUserDto) {
    const userToAttempt: any = await this.usersService.findOneByEmail(
      loginAttempt.email,
    );

    if (!userToAttempt) {
      throw new UnauthorizedException('Unknown User');
    }

    return new Promise(resolve => {
      userToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
        if (err) throw new UnauthorizedException();

        if (isMatch) {
          resolve(this.createJwtPayload(userToAttempt));
        } else {
          throw new UnauthorizedException();
        }
      });
    });
  }

  async validateUserByJwt(payload: JwtPayload) {
    const user = await this.usersService.findOneByEmail(payload.email);

    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  createJwtPayload(user) {
    const data: JwtPayload = {
      email: user.email,
    };

    let jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt,
    };
  }
}
