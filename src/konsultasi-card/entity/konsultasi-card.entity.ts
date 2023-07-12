import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'konsultasi_cards'})
export class KonsultasiCardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    slug: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @Column()
    published_at: string;

}