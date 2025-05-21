'use server';
import {prisma} from '@/lib/db'

export async function joinCourse(userId:any, courseId:string) {
    await prisma.courseEnrollment.create({
  data: {
    userId,
    courseId,
  }
});
}

export async function createCourse (values:any) {
    await prisma.course.create({
        data:{
            ...values
        }
    })
}

export async function getCourses() {
    const courses =  await prisma.course.findMany();
    return courses
}