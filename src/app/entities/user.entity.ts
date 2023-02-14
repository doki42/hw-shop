import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  @IsEmail()
  email: string;

  @Column()
  password: string;

}


export { DatabaseSession } from '@foal/typeorm';