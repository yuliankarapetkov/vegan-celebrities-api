import { Module } from '@nestjs/common';

import { controllers } from './controllers';

@Module({
  controllers: [
      ...controllers
  ]
})
export class CelebritiesModule {}
