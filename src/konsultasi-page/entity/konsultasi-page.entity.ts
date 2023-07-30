import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('konsultasis')
export class KonsultasiPageEntity {
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