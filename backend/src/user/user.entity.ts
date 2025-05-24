import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organization } from '../organization/organization.entity';

export type UserRole = 'ADMIN' | 'USER';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER'], default: 'USER' })
  role: UserRole;

  @ManyToOne(() => Organization, organization => organization.users)
  organization: Organization;
} 