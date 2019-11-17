import { Exclude, Expose } from 'class-transformer';

import { CelebrityResDto } from './celebrity-res.dto';
import { ValidateNested } from 'class-validator';

@Exclude()
export class GetCelebritiesResDto {
    @Expose()
    celebrities: CelebrityResDto[];

    @Expose()
    count: number;
}
