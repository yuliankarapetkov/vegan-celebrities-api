import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { controllers } from './controllers';
import { repositories } from './repositories';
import { services } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ...repositories
        ])
    ],
    controllers: [
        ...controllers
    ],
    providers: [
        ...services
    ]
})
export class OccupationsModule {}
