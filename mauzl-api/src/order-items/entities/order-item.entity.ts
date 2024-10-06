import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SizeType } from '~order-items/order-item.util';
import { Order } from '~orders/entities/order.entity';
import { Product } from '~products/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @Column({ default: 'm' })
  size: SizeType;

  @Column()
  quantity: number;

  @Column('decimal')
  price: number;
}
