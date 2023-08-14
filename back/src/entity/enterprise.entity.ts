import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Enterprise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}

export default Enterprise;
