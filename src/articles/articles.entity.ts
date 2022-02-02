import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()


export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  title: string;
  
  @Column({nullable: true})
  message: string;

  @Column()
  authorId: number;

  @OneToMany(type => Articles, articles => articles.id) 
  articles: Articles[];
  
}
