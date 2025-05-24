import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { LoginUseCase } from '../use-cases/login.usecase';

@Controller('auth')
export class LoginController {
  private readonly loginUseCase: LoginUseCase;

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    this.loginUseCase = new LoginUseCase(this.userRepo);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.loginUseCase.execute(body.email, body.password);
  }
} 