// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsBase64 } from 'class-validator';

@Entity()
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column()
  @IsNumber()
  price: number;

  @Column({nullable: true})
  @IsBase64()
  picture?: string;

  @Column()
  active: boolean;

}
