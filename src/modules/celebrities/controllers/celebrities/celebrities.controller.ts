import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe, Put, Delete, Query, UseGuards } from '@nestjs/common';

import { Roles } from './../../../auth/decorators';
import { UserRole } from './../../../auth/enums';
import { RolesGuard } from './../../../auth/guards';
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
    @UseGuards(AuthGuard(), RolesGuard)
    @Roles(UserRole.Admin)
    createCelebrity(@Body() celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        return this._celebritiesService.createCelebrity(celebrityDto);
    }

    @Put('/:slug')
    @UseGuards(AuthGuard(), RolesGuard)
    @Roles(UserRole.Admin)
    updateCelebrity(@Param('slug') slug: string, @Body() celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        return this._celebritiesService.updateCelebrity(slug, celebrityDto);
    }

    @Delete('/:slug')
    @UseGuards(AuthGuard(), RolesGuard)
    @Roles(UserRole.Admin)
    deleteCelebrity(@Param('slug') slug: string): Promise<void> {
        return this._celebritiesService.deleteCelebrity(slug);
    }

    // @Post('/seed')
    // @UseGuards(AuthGuard(), RolesGuard)
    // @Roles(UserRole.Admin)
    // seedCelebrities(): Promise<void> {
    //     return this._celebritiesService.seed();
    // }
}
