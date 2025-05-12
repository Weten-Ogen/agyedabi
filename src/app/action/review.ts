'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getReviewById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateReviewById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteReviewById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteReviews(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateRviews() {

}

export async function createReview () {

}
