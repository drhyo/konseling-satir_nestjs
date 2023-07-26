// import { genSalt, hash } from "bcrypt";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'up_users'})
 export class UserEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;

    // @BeforeInsert()
    // async hashPassword() {
    //     const salt = 15
    //     const generatedSalt = await genSalt(salt)
    //     this.password = await hash(this.password, generatedSalt)
    // }

    // @BeforeInsert()
    // insertedDate() {
    //     this.created_at = Date.now()
    // }

 }