import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'polling_has_enterprise' })
class PollingHasEnterprise {
  @PrimaryColumn({ name: 'polling_id' })
  pollingId: number;

  @PrimaryColumn({ name: 'enterprise_id' })
  enterpriseId: number;
}

export default PollingHasEnterprise;
