'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getCourseById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateCourseById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteCourseById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteCourses(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateCourses() {

}

export async function createCourse () {

}
