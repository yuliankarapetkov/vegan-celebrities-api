import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthModule } from './../auth/auth.module';
import { controllers } from './controllers';
import { repositories } from './repositories';
import { services } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ...repositories
        ]),

        AuthModule
    ],
    controllers: [
        ...controllers
    ],
    providers: [
        ...services
    ]
})
export class CelebritiesModule {}
