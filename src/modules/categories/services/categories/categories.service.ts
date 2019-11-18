
import { Injectable } from '@nestjs/common';

import { plainToClass } from 'class-transformer';

import { CategoryResDto } from './../../dtos';
import { CategoryRepository } from './../../repositories';

@Injectable()
export class CategoriesService {
    constructor(
        private _categoryRepository: CategoryRepository
    ) {}

    async getOccupations(): Promise<CategoryResDto[]> {
        return plainToClass(CategoryResDto, await this._categoryRepository.find());
    }
}
