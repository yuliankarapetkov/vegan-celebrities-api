import { NestFactory } from '@nestjs/core';

import * as config from 'config';

const serverConfig = config.get('server');

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    const port = process.env.PORT || serverConfig.port;

    await app.listen(port);
}
bootstrap();
