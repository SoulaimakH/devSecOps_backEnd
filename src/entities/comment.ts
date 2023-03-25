import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'comments'})
export class Comment {
  /** The id book. */

  @PrimaryGeneratedColumn('increment')
  id: number;

  /** The title. */
  @Column()
  text:string ;

  /** Author */
  @Column()
  arcticleId:number ;

  /** text */
  @Column()
  UserId:string ;

  /** text */
  @Column()
  UserName:string ;

}