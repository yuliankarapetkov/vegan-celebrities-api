import { Controller, Get } from '@nestjs/common';

@Controller('celebrities')
export class CelebritiesController {
    @Get()
    getCelebrities() {
        return [1, 2, 3];
    }
}
