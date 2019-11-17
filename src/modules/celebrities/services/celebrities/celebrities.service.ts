import { Injectable, NotFoundException } from '@nestjs/common';

import { plainToClass, plainToClassFromExist } from 'class-transformer';

import { CelebrityReqDto, CelebrityResDto, GetCelebritiesReqDto, GetCelebritiesResDto } from './../../dtos';
import { CelebrityEntity } from './../../entities';
import { CelebrityRepository } from './../../repositories';

@Injectable()
export class CelebritiesService {
    constructor(
        private _celebrityRepository: CelebrityRepository
    ) {}

    async getCelebrities({ search, limit, offset }: GetCelebritiesReqDto): Promise<GetCelebritiesResDto> {
        const query = this._celebrityRepository.createQueryBuilder('celebrity');

        if (search) {
            query
                .andWhere('UPPER(celebrity.name) LIKE UPPER(:search)', { search: `%${search}%` })
                .orWhere('UPPER(celebrity.about) LIKE UPPER(:search)', { search: `%${search}%` })
                .orWhere('UPPER(celebrity.occupation) LIKE UPPER(:search)', { search: `%${search}%` })
                .orWhere('UPPER(celebrity.partner) LIKE UPPER(:search)', { search: `%${search}%` });
        }

        const count = await query.clone().getCount();

        query.orderBy('UPPER(celebrity.name)', 'ASC');

        if (limit) {
            query.limit(limit);
        }

        if (offset) {
            query.offset(offset);
        }

        const celebrities = await query.getMany();

        return plainToClass(GetCelebritiesResDto, { celebrities: plainToClass(CelebrityResDto, celebrities), count });
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

        return plainToClass(CelebrityResDto, updatedEntity);
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
