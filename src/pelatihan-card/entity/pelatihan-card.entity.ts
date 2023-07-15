import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'card_pelatihans'})
export class PelatihanCardEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: string;

    @Column()
    body: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @Column()
    published_at: string;

}