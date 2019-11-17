import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe, Put, Delete, Query } from '@nestjs/common';

import { CelebrityReqDto, CelebrityResDto, GetCelebritiesReqDto, GetCelebritiesResDto } from './../../dtos';
import { CelebritiesService } from './../../services';

@Controller('celebrities')
@UsePipes(new ValidationPipe({ transform: true }))
export class CelebritiesController {
    constructor(
        private _celebritiesService: CelebritiesService
    ) {}

    @Get()
    getCelebrities(@Query() getCelebritiesDto: GetCelebritiesReqDto): Promise<GetCelebritiesResDto> {
        return this._celebritiesService.getCelebrities(getCelebritiesDto);
    }

    @Get('/:slug')
    getCelebrity(@Param('slug') slug: string): Promise<CelebrityResDto> {
        return this._celebritiesService.getCelebrity(slug);
    }

    @Post()
    createCelebrity(@Body() celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        return this._celebritiesService.createCelebrity(celebrityDto);
    }

    @Put('/:slug')
    updateCelebrity(@Param('slug') slug: string, @Body() celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        return this._celebritiesService.updateCelebrity(slug, celebrityDto);
    }

    @Delete('/:slug')
    deleteCelebrity(@Param('slug') slug: string): Promise<void> {
        return this._celebritiesService.deleteCelebrity(slug);
    }

    @Post('/seed')
    seedCelebrities(): Promise<void> {
        return this._celebritiesService.seed();
    }
}
