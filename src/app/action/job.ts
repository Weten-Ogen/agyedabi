'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getJobById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateJobById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteJobById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteJobs(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateJobs() {

}

export async function createJob() {

}
