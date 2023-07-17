import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'questions'})
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;
}