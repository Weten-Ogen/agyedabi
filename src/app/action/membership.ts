'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getMembershipById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateMembershipById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteMembershipById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteMemberships(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateMemberships() {

}

export async function createMembership () {

}
