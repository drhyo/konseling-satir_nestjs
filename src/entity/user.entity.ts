import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

Entity({
    name: 'user'
})


 export class User  {
    @PrimaryColumn()
    id: number;
    
    @Column()
    name: string;
 
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    sex: string;

    @Column()
    phone_number: string;

    @Column()
    create_at: string;
 }