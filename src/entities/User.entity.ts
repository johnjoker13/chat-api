import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public readonly id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastName: string;
}
