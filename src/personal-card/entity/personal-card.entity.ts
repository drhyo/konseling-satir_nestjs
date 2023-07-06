import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'personal_cards'})
export class PersonalCardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    medsos_1: string;

    @Column()
    medsos_2: string;
}