import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Picture {
  @PrimaryColumn()
  id: number;

  @Column()
  path: string;

  @PrimaryColumn({ name: 'enterprise_id' })
  enterpriseId: string;
}

export default Picture;
