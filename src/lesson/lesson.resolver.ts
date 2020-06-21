/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id:string,
    ) {
        return this.lessonService.getLesson(id);
    }

    // Using [] to return a array of Lessons
    // Nest GraphQL works like that ¯¯\_(ヅ)_/¯¯
    @Query(returns => [LessonType])
    lessons(){
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput:CreateLessonInput,
    ) {
        return this.lessonService.createLesson(createLessonInput);
    }
}