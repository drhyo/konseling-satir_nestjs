import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product_cards'})
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: string;

    @Column()
    day: string;

    @Column()
    minute: string;

    @Column()
    second: string;

    @Column()
    body: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    published_at: Date;

    
}