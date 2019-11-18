import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { OccupationEntity } from './occupation.entity';

@Entity('Category')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => OccupationEntity, occupation => occupation.category, { eager: false })
    occupations: OccupationEntity[];
}
