import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_profile' })
export class UserProfile {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 500 })
  firstname: string;

  @Column({ length: 500 })
  lastname: string;

  @Column({ nullable: true })
  age: number;
}
