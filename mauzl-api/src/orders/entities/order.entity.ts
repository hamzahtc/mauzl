import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from '~clients/entities/client.entity';
import { OrderItem } from '~order-items/entities/order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Client, (client) => client.order, { cascade: true })
  @JoinColumn()
  client: Client;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];

  @Column('decimal')
  totalAmount: number;

  @Column({ default: 'pending' })
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
