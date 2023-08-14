import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { createHmac } from 'crypto';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  pass: string;

  @BeforeInsert()
  beforeInsert() {
    // crypto pass to sha256
    this.pass = createHmac('sha256', this.pass).digest('hex');
  }
}

export default User;
