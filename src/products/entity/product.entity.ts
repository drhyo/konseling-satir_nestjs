import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    body:string;

    @Column()
    day: string;

    @Column()
    minute: string;

    @Column()
    sec: string;

    @Column()
    price: string;

    @Column()
    category: string;

    @Column()
    slug: string;
}