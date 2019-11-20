import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, BeforeInsert, BeforeUpdate, ManyToOne } from 'typeorm';

import { Sex } from './../enums';
import { OccupationEntity } from './../../occupations/entities';

@Entity('Celebrity')
@Unique(['slug'])
export class CelebrityEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    about: string;

    @Column()
    sex: Sex;

    @Column()
    country: string;

    @ManyToOne(type => OccupationEntity, occupation => occupation.celebrities, { eager: true })
    occupation: OccupationEntity;

    @Column()
    occupationId: number;

    @Column()
    imageUrl: string;

    @Column({ nullable: true })
    birthdate: Date;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    partner: string;

    // Might normalize these and put them in another table.
    @Column({ nullable: true })
    wikiUrl: string;

    @Column({ nullable: true })
    facebookUrl: string;

    @Column({ nullable: true })
    instagramUrl: string;

    @Column({ nullable: true })
    youtubeUrl: string;

    @Column({ nullable: true })
    twitterUrl: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @BeforeInsert()
    beforeInsert(): void {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    beforeUpdate(): void {
        this.updatedAt = new Date();
    }
}
