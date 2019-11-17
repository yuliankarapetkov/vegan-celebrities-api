import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCelebritiesReqDto {
    @IsOptional()
    @IsString()
    search: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    limit: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    offset: number;
}
