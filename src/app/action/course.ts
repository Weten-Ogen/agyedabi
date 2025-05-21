'use server';
import {prisma} from '@/lib/db'

export async function joinCourse(userId:any, courseId:string) {
    await prisma.courseEnrollment.create({
  data: {
    userId,
    courseId,
  }
});
    await prisma.user.update({
        where:{
            id:userId
        },
        data:{
            status: 'ONGOING'
        }
    })
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

export async  function getCourse(id:string) {
    const course  = await prisma.course.findFirst({
        where:{
            id
        }
    })
    return course
}