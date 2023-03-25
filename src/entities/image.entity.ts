import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'images'})
export class Image {
  /** The id book. */

  @PrimaryGeneratedColumn('increment')
  id: number;

  /** The title. */
  @Column()
  destination: string;

  /** Author */
  @Column()
  filename: string;

  /** text */
  @Column()
  path: string;

  /** text */
  @Column()
  size: string;

  @Column()
  articleId:number

  @Column()
  mimetype: string;
}