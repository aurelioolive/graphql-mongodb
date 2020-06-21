/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private StudentService:StudentService,
    ){}

    @Query(returns => [StudentType])
    async students(){
        return this.StudentService.getStudents();
    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    ){
        return this.StudentService.createStudent(createStudentInput);
    }
}