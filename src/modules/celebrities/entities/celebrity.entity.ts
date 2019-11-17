import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Celebrity')
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
    category: string;

    @Column()
    occupation: string;

    @Column()
    imageUrl: string;

    @Column({ nullable: true })
    birthdate: Date;

    @Column({ nullable: true })
    birthplace: string;

    @Column({ nullable: true })
    hegiht: number;

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
}
