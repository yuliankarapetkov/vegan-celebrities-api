import { Exclude, Expose, Type, Transform } from 'class-transformer';

import { Sex } from './../enums';

@Exclude()
export class CelebrityResDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    slug: string;

    @Expose()
    about: string;

    @Expose()
    sex: Sex;

    @Expose()
    country: string;

    @Expose()
    @Transform((value, obj, type) => {
        const { id, name } = obj.occupation.category;
        return { id, name };
    })
    category: { id: number; name: string; };

    @Expose()
    @Transform((value) => ({ id: value.id, name: value.name }))
    occupation: { id: number; name: string; };

    @Expose()
    imageUrl: string;

    @Expose()
    birthdate: Date;

    @Expose()
    height: number;

    @Expose()
    partner: string;

    @Expose()
    wikiUrl: string;

    @Expose()
    facebookUrl: string;

    @Expose()
    instagramUrl: string;

    @Expose()
    youtubeUrl: string;

    @Expose()
    twitterUrl: string;
}
