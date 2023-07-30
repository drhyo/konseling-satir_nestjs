import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pelatihans')
export class PelatihanPageEntity {
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