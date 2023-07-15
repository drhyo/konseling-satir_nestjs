import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'banner_pages'})
export class BannerPageEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    body: string;

}