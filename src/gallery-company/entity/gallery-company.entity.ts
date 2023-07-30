import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'gallery_companies'})
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;
}