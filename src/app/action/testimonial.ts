'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getTestimonialById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateTestimonialById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteTestimonialById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteTestimonial(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateTestimonial() {

}

export async function createTestimonial () {

}
