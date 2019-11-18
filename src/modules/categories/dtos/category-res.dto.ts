import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CategoryResDto {
    @Expose()
    id: number;

    @Expose()
    name: string;
}
