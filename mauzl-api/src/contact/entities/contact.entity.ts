import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactSubject } from '~contact/contact.util';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  subject: ContactSubject;

  @Column()
  message: string;
}
