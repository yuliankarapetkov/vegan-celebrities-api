import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OccupationResDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    category: { id: number; name: string; };
}
