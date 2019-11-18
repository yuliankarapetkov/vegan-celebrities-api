import { Repository, EntityRepository } from 'typeorm';

import { OccupationEntity } from '../../entities';

@EntityRepository(OccupationEntity)
export class OccupationRepository extends Repository<OccupationEntity> {

}
