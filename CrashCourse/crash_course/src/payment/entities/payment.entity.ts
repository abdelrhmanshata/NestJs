import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'EGP', nullable: true })
  currency: string;

  @Column()
  amount: number;

  @Column({ default: 'Today', nullable: true })
  day: string;

  @Column({ default: true })
  isActive: boolean;
}
