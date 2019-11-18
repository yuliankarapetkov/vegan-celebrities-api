
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import { CategoryEntity } from './../../categories/entities/category.entity';
import { CelebrityEntity } from './../../celebrities/entities';

@Entity('Occupation')
export class OccupationEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => CategoryEntity, category => category.occupations, { eager: true })
    category: CategoryEntity;

    @Column()
    categoryId: number;

    @OneToMany(type => CelebrityEntity, celebrity => celebrity.occupation, { eager: false })
    celebrities: OccupationEntity[];
}
