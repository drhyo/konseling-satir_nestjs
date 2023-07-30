import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('hyperlinks')
export class HyperlinkEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;
}