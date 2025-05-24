import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { Organization } from '../organization/organization.entity';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.userRepo.findOne({
      where: { email: body.email },
      relations: ['organization'],
    });
    if (!user || user.password !== body.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Return user and organization data (no password)
    const { password, ...userData } = user;
    return {
      ...userData,
      organization: user.organization,
    };
  }
} 