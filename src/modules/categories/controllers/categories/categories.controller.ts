import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';

import { CategoryResDto } from '../../dtos';
import { CategoriesService } from '../../services';

@Controller('categories')
@UsePipes(new ValidationPipe({ transform: true }))
export class CategoriesController {
    constructor(
        private _categoriesService: CategoriesService
    ) {}

    @Get()
    getCategories(): Promise<CategoryResDto[]> {
        return this._categoriesService.getOccupations();
    }
}
