import { Exclude, Expose, Type } from 'class-transformer';

import { CelebrityResDto } from './celebrity-res.dto';
import { ValidateNested } from 'class-validator';

@Exclude()
export class GetCelebritiesResDto {
    @Expose()
    @Type(() => CelebrityResDto)
    celebrities: CelebrityResDto[];

    @Expose()
    count: number;
}
