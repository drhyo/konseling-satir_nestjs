import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'articel_cards'})
export class ArticelCardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    eye: number;

    @Column()
    slug: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    published_at: Date;

    
}