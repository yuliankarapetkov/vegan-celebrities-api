import { Exclude, Expose } from 'class-transformer';

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
    category: string;

    @Expose()
    occupation: string;

    @Expose()
    imageUrl: string;

    @Expose()
    birthdate: Date;

    @Expose()
    birthplace: string;

    @Expose()
    hegiht: number;

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
