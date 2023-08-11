import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'up_users' })
export class UserEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ unique: true })
   email: string;

   @Column()
   password: string;

   @Column()
   created_at: Date;

}