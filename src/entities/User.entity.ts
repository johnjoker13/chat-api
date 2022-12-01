import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  public readonly id: string = uuidv4();

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ length: 100 })
  nickname: string;
}
