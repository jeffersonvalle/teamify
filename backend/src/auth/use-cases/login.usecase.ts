import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { UnauthorizedException } from '@nestjs/common';

export class LoginUseCase {
  constructor(private readonly userRepo: Repository<User>) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findOne({
      where: { email },
      relations: ['organization'],
    });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Return user and organization data (no password)
    const { password: _, ...userData } = user;
    return {
      ...userData,
      organization: user.organization,
    };
  }
} 