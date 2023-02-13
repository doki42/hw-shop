// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({nullable: true})
  picture?: string;

  @Column()
  active: boolean;

}
