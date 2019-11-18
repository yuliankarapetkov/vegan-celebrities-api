import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';

import { OccupationResDto } from '../../dtos';
import { OccupationsService } from '../../services';

@Controller('occupations')
@UsePipes(new ValidationPipe({ transform: true }))
export class OccupationsController {
    constructor(
        private _occupationsService: OccupationsService
    ) {}

    @Get()
    getOccupations(): Promise<OccupationResDto[]> {
        return this._occupationsService.getOccupations();
    }
}
