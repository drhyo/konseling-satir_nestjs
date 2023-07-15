import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'gallery_tentang_konselings'})
export class GalleryTentangEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    created_at: Date;

    
}