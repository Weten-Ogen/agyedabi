'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getGroupById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateGroupById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteGroupById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteGroups(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateGroups() {

}

export async function createGroup () {

}
