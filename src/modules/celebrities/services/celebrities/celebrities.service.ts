import { Injectable, NotFoundException } from '@nestjs/common';

import { plainToClass, plainToClassFromExist } from 'class-transformer';

import { CelebrityReqDto, CelebrityResDto, GetCelebritiesReqDto, GetCelebritiesResDto } from './../../dtos';
import { CelebrityEntity } from './../../entities';
import { CelebrityRepository } from './../../repositories';

import * as faker from 'faker';

@Injectable()
export class CelebritiesService {
    constructor(
        private _celebrityRepository: CelebrityRepository
    ) {}

    async getCelebrities({ search, limit, offset }: GetCelebritiesReqDto): Promise<GetCelebritiesResDto> {
        const query = this._celebrityRepository.createQueryBuilder('celebrity');

        query.leftJoinAndSelect('celebrity.occupation', 'occupation');
        query.leftJoinAndSelect('occupation.category', 'category');

        if (search) {
            query
                .andWhere('UPPER(celebrity.name) LIKE UPPER(:search)', { search: `%${search}%` })
                .orWhere('UPPER(celebrity.about) LIKE UPPER(:search)', { search: `%${search}%` })
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

        return plainToClass(GetCelebritiesResDto, { celebrities, count });
    }

    async getCelebrity(slug: string): Promise<any> {
        const celebrityEntity = await this._getCelebrity(slug);

        return plainToClass(CelebrityResDto, celebrityEntity);
    }

    async createCelebrity(celebrityDto: CelebrityReqDto): Promise<CelebrityResDto> {
        const celebrityEntity = plainToClass(CelebrityEntity, celebrityDto);

        await celebrityEntity.save();

        return plainToClass(CelebrityResDto, await this._celebrityRepository.findOne(celebrityEntity.id));
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

    async seed(count = 1000): Promise<void> {
        for (let i = 0; i < 1000; i++) {
            const name = faker.name.findName();
            const slug = name.split(' ').join('-').toLowerCase();

            const celebrity = {
                name,
                slug,
                about: faker.lorem.text(1),
                category: faker.name.jobArea(),
                occupation: faker.name.jobTitle(),
                imageUrl: faker.image.imageUrl(),
                birthdate: faker.date.past(100),
                birthplace: faker.address.country,
                height: faker.random.number(250),
                partner: faker.name.findName(),
                wikiUrl: faker.internet.url()
            };

            const celebrityEntity = plainToClass(CelebrityEntity, celebrity);

            await celebrityEntity.save();
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
