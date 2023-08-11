import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('footer_adresses')
export class AdressEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    city: string;

    @Column()
    street: string;
}