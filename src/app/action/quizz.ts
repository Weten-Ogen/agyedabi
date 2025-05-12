'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getQuizzById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateQuizzById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteQuizzById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteQuizzes(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateQuizzes() {

}

export async function createQuizz() {

}
