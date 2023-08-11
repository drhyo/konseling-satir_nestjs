import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'footer_contact_uses'})
export class FooterContactUsEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    pobox: string;

    @Column()
    city: string;

    @Column({name:'city_number'})
    cityNumber: string;

    @Column({name:'pobox_number'})
    poboxNumber: string;

    @Column({name:'phone_number'})
    phoneNumber: string;

    
}