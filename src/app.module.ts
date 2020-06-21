import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true, // using New Server Discover and Monitoring engine
      entities: [
        Lesson
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,    
    }),
    LessonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}