import { Controller, Put, Param, Body, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './organization.entity';

@Controller('organization')
export class OrganizationController {
  constructor(
    @InjectRepository(Organization)
    private readonly orgRepo: Repository<Organization>,
  ) {}

  @Put(':id')
  async updateOrganization(
    @Param('id') id: number,
    @Body() body: { name?: string; address?: string }
  ) {
    const org = await this.orgRepo.findOne({ where: { id } });
    if (!org) throw new NotFoundException('Organization not found');
    if (body.name !== undefined) org.name = body.name;
    if (body.address !== undefined) org.address = body.address;
    await this.orgRepo.save(org);
    return org;
  }
} 