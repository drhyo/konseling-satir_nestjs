import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'layanan_konseling_cards'})
export class LayananCardEntity {
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
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    published_at: Date;
    
}