import { genSalt, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity({
    name: 'user'
})


 export class User  {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
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

    @Column({type: "bigint"})
    create_at: number;

    @BeforeInsert()
    async hashPassword() {
        const salt = 15
        const generatedSalt = await genSalt(salt)
        this.password = await hash(this.password, generatedSalt)
    }

    @BeforeInsert()
    insertedDate() {
        this.create_at = Date.now()
    }

 }