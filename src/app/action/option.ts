'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getOptionById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateOptionById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteOptionById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteOptions(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateOptions() {

}

export async function createOption () {

}
