import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'slider_section_infos'})
export class SliderSectionInfoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    published_at: Date;
}