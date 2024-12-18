import { Entity, Column } from 'typeorm';
@Entity()
export class User {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;
}
