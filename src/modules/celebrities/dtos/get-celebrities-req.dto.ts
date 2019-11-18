import { IsOptional, IsNumber, IsString, IsEnum, IsISO31661Alpha2 } from 'class-validator';
import { Type } from 'class-transformer';

import { Sex } from './../enums/sex.enum';

export class GetCelebritiesReqDto {
    @IsOptional()
    @IsString()
    search: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    category: number;

    @IsOptional()
    @IsEnum(Sex)
    sex: Sex;

    @IsOptional()
    @IsString()
    @IsISO31661Alpha2()
    country: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    limit: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    offset: number;
}
