import { Injectable } from '@nestjs/common';

import { plainToClass } from 'class-transformer';

import { OccupationResDto } from '../../dtos';
import { OccupationRepository } from '../../repositories';

@Injectable()
export class OccupationsService {
    constructor(
        private _occupationRepository: OccupationRepository
    ) {}

    async getOccupations(): Promise<OccupationResDto[]> {
        return plainToClass(OccupationResDto, await this._occupationRepository.find());
    }
}
