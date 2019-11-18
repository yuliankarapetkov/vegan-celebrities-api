import { CategoriesModule } from './categories/categories.module';
import { CelebritiesModule } from './celebrities/celebrities.module';
import { OccupationsModule } from './occupations/occupations.module';

export const modules = [
    CategoriesModule,
    CelebritiesModule,
    OccupationsModule
];

export * from './categories/categories.module';
export * from './celebrities/celebrities.module';
export * from './occupations/occupations.module';
