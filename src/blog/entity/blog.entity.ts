import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'blogs'})
export class BlogEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column() 
    created_at: Date;

    @Column() 
    updated_at: Date;

    @Column()
    published_at: Date;

}