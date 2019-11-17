import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';

import { CelebrityReqDto } from './../../dtos';
import { CelebritiesService } from './../../services';

@Controller('celebrities')
@UsePipes(new ValidationPipe({ transform: true }))
export class CelebritiesController {
    constructor(
        private _celebritiesService: CelebritiesService
    ) {}

    @Get()
    getCelebrities() {
        return [1, 2, 3];
    }

    @Get('/:slug')
    getCelebrity(@Param('slug') slug: string) {
        return this._celebritiesService.getCelebrity(slug);
    }

    @Post()
    createCelebrity(@Body() celebrityDto: CelebrityReqDto ) {
        return this._celebritiesService.createCelebrity(celebrityDto);
    }
}
