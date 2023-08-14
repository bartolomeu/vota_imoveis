import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_votes_polling' })
class UserVotesPolling {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'polling_id' })
  pollingId: number;

  @Column({ name: 'enterprise_id' })
  enterpriseId: number;
}

export default UserVotesPolling;
