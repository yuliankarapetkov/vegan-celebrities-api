import { Controller, Get, Post } from '@nestjs/common';

import { CelebritiesService } from './../../services';

@Controller('celebrities')
export class CelebritiesController {
    constructor(
        private _celebritiesService: CelebritiesService
    ) {}

    @Get()
    getCelebrities() {
        return [1, 2, 3];
    }

    @Post()
    createCelebrity() {
        return this._celebritiesService.createCelebrity();
    }
}
