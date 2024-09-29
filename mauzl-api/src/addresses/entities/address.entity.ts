import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from '~clients/entities/client.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Client, (client) => client.order)
  client: Client;

  @Column()
  addressLine: string;

  @Column()
  city: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
