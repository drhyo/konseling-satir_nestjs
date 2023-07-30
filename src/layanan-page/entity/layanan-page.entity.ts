import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('layanans')
export class LayananPageEntity {
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