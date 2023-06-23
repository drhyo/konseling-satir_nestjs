import { genSalt, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'admin'})
export class AdminEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        const salt = 15 
        const generatedSalt = await genSalt(salt)
        this.password = await hash(this.password, generatedSalt) 
    }
}
