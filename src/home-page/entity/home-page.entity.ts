import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'homepages'})
export class HomePageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    header: string; 

    @Column()
    desc: string;
    
    @Column()
    title: string;

    @Column()
    body: string;
}