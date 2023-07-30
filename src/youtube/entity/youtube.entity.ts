import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'youtubes'})
export class YoutubeEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;


}