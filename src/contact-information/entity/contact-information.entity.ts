import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contact_informations')
export class ContactInformationEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    adress: string;
}