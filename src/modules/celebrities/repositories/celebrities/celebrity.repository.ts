import { Repository, EntityRepository } from 'typeorm';

import { CelebrityEntity } from './../../entities';

@EntityRepository(CelebrityEntity)
export class CelebrityRepository extends Repository<CelebrityEntity> {

}
