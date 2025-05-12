'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getAssignmentById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateAssignmentById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteAssignmentById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteAssignments(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}



export async function createAssignment () {

}
