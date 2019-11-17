import { CelebrityResDto } from './../../dtos/celebrity-res.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CelebrityReqDto } from './../../dtos';
import { CelebrityEntity } from './../../entities';
import { CelebrityRepository } from './../../repositories';
import { plainToClass, plainToClassFromExist } from 'class-transformer';

@Injectable()
export class CelebritiesService {
    constructor(
        private _celebrityRepository: CelebrityRepository
    ) {}

    getCelebrities() {

    }

    async getCelebrity(slug: string): Promise<CelebrityResDto> {
        const celebrityEntity = await this._celebrityRepository.findOne({ where: { slug } });

        if (!celebrityEntity) {
            throw new NotFoundException(`Celebrity ${slug} not found.`);
        }

        return plainToClass(CelebrityResDto, celebrityEntity);
    }



    async createCelebrity(celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        const celebrityEntity = plainToClass(CelebrityEntity, celebrityDto);

        await celebrityEntity.save();

        return plainToClass(CelebrityResDto, celebrityEntity);
    }
}
