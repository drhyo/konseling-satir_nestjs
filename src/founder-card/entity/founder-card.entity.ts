import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'founder_cards'})
export class FounderCardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    name: string;

}