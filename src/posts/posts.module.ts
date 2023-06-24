import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
