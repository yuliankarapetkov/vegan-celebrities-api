import { CelebritiesModule } from './celebrities/celebrities.module';
import { OccupationsModule } from './occupations/occupations.module';

export const modules = [
    CelebritiesModule,
    OccupationsModule
];

export * from './celebrities/celebrities.module';
export * from './occupations/occupations.module';
