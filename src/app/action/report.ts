'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getReportById(id:string){
    const user = await prisma.users.findOne({
        where: {
            id
        }
    })
    return user
}

export async function updateReportById(id:string) {
    const user = await prisma.users.updateOne({
        where:{
            id
        }
    })
    return user
}

export async function deleteReportById(id:string) {
    await prisma.users.deleteOne({
        where:{
            id
        }
    })
    revalidatePath('/admin/users')
}

export async function deleteReports(data:FormData) {
    await prisma.users.deleteMany({
    
    })
}


export async function updateReports() {

}

export async function createReport () {

}
