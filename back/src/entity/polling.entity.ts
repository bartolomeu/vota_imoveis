import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Polling {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  start: string;

  @Column({ type: 'date' })
  end: string;
}

export default Polling;
