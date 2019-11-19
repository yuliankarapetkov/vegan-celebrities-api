import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { strategies, HttpBearerStrategy } from './strategies';

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'bearer'
        }),
    ],
    providers: [
        ...strategies
    ],
    exports: [
        HttpBearerStrategy,
        PassportModule
    ]
})
export class AuthModule {}
