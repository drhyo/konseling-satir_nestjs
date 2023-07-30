import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('abouts')
export class AboutPageEntity {
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