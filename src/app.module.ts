import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { PostModule } from './posts/post.module';

@Module({
  imports: [UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
