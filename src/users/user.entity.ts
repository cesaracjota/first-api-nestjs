import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserProfile } from './profile.entity';
import { Post } from '../posts/post.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 500, unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
