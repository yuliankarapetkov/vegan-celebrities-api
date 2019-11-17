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

    async getCelebrities() {
        const [ celebrities, count ] = await this._celebrityRepository.findAndCount();

        return { celebrities: plainToClass(CelebrityResDto, celebrities), count };
    }

    async getCelebrity(slug: string): Promise<CelebrityResDto> {
        const celebrityEntity = await this._getCelebrity(slug);

        return plainToClass(CelebrityResDto, celebrityEntity);
    }

    async createCelebrity(celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        const celebrityEntity = plainToClass(CelebrityEntity, celebrityDto);

        await celebrityEntity.save();

        return plainToClass(CelebrityResDto, celebrityEntity);
    }

    async updateCelebrity(slug: string, celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        const celebrityEntity = await this._getCelebrity(slug);
        const updatedEntity = plainToClassFromExist(celebrityEntity, celebrityDto);

        await updatedEntity.save();

        return plainToClass(CelebrityResDto, celebrityEntity);
    }

    async deleteCelebrity(slug: string): Promise<void> {
        const { affected } = await this._celebrityRepository.delete({ slug });

        if (!affected) {
            throw new NotFoundException(`Celebrity ${slug} not found.`);
        }
    }

    private async _getCelebrity(slug: string): Promise<CelebrityEntity> {
        const celebrityEntity = await this._celebrityRepository.findOne({ where: { slug } });

        if (!celebrityEntity) {
            throw new NotFoundException(`Celebrity ${slug} not found.`);
        }

        return celebrityEntity;
    }
}
