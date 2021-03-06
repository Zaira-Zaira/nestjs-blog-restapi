import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()


export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  email: string;
  
  @Column({nullable: true})
  password: string;
}
