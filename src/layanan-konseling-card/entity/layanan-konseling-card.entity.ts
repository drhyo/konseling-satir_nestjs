import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LayananKonselingCardEntity {
    @PrimaryGeneratedColumn()
    id: string;

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