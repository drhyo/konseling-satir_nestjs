import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('webinars')
export class WebinarPageEntity {
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