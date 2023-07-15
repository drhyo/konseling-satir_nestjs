import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'gallery_banner_homepages'})
export class GalleryHomeEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    created_at: Date;
}