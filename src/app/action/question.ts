'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getQuestionById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateQuestionById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteQuestionById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteQuestions(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateQuestions() {

}

export async function createQuestion() {

}
