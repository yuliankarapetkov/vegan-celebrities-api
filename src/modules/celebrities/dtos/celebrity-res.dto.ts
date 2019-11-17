import { Type, Exclude, Expose } from 'class-transformer';

@Exclude()
export class CelebrityResDto {
    @Expose()
    id: number;
    @Expose()
    name: string;
}
