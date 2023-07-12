import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'blogs'})
export class BlogEntity {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'title'})
    title: string;

    @Column({name: 'desc'})
    desc: string;

    @Column({name: 'body'})
    body: string;

    @Column()
    slug: string;

    @Column({name: 'created_at'})
    created_at: Date;

    @Column({name: 'updated_at'})
    updated_at: Date;

    @Column({name: 'published_at'})
    published_at: Date;

}