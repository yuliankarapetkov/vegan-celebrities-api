import { Repository, EntityRepository } from 'typeorm';

import { CategoryEntity } from '../../entities';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {

}
