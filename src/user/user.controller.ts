import {Body, Controller, Get, Post } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserService } from './user.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { UserEntity } from './entites/user.entity';
import {JwtAuthGuard} from "./Guards/jwt-auth.guard";

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {
  }
  @Post()
  register(
    @Body() userData: UserSubscribeDto
  ) {
    return this.userService.register(userData);
  }

  @Post('login')
  login(
    @Body() credentials: LoginCredentialsDto
  ) {
    return this.userService.login(credentials);
  }

  @Get('all')
  //@UseGuards(JwtAuthGuard)
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}
