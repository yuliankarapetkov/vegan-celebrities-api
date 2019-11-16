import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { typeormConfig } from './config';
import { modules } from './modules';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeormConfig),

        ...modules
    ]
})
export class AppModule {}
