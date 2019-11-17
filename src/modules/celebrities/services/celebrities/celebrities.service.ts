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

    async getCelebrity(slug: string) {
        const celebrity = await this._celebrityRepository.findOne({ where: { slug } });

        if (!celebrity) {
            throw new NotFoundException(`Celebrity ${slug} not found.`);
        }

        return celebrity;
    }



    async createCelebrity(celebrityDto: CelebrityReqDto) {
        const celebrityEntity = plainToClass(CelebrityEntity, celebrityDto);

        const res = plainToClass(CelebrityResDto, await celebrityEntity.save())

        return res;
    }
}
