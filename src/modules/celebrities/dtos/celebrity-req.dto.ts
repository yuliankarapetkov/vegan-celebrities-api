import { IsNumber, Min, Max, IsOptional, IsString, MaxLength, IsDate, MinLength } from 'class-validator';
import { Type, Exclude, Expose } from 'class-transformer';

@Exclude()
export class CelebrityReqDto {
    @Expose()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name: string;

    @Expose()
    @IsString()
    @MaxLength(100)
    slug: string;

    @Expose()
    @IsString()
    @MaxLength(1000)
    about: string;

    @Expose()
    @IsString()
    @MaxLength(50)
    category: string;

    @Expose()
    @IsString()
    @MaxLength(50)
    occupation: string;

    @Expose()
    @IsString()
    @MaxLength(200)
    imageUrl: string;

    @Expose()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    birthdate: Date;

    @Expose()
    @IsOptional()
    @IsString()
    birthplace: string;

    @Expose()
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    @Min(50)
    @Max(280)
    hegiht: number;

    @Expose()
    @IsOptional()
    @IsString()
    partner: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    wikiUrl: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    facebookUrl: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    instagramUrl: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    youtubeUrl: string;

    @Expose()
    @IsOptional()
    @IsString()
    @MaxLength(200)
    twitterUrl: string;
}
