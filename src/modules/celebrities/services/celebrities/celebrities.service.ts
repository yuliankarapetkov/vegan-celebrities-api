import { CelebrityEntity } from './../../entities/celebrity.entity';
import { Injectable } from '@nestjs/common';

import { CelebrityRepository } from './../../repositories';

@Injectable()
export class CelebritiesService {
    constructor(
        private _celebrityRepository: CelebrityRepository
    ) {}

    async createCelebrity() {
        const celeb = new CelebrityEntity();
        celeb.name = 'Ivan Asen Vtori';

        await celeb.save();
    }
}
