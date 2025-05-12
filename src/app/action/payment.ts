'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getPaymentsById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updatePaymentsById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deletePaymentsById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deletePayments(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updatePayments() {

}

export async function createPayment() {

}
