'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getGroupById(id:string){
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })
    return user
}

export async function updateGroupById(id:string) {
   
   
}

export async function deleteGroupById(id:string) {
}

export async function deleteGroups(data:FormData) {
  
}


export async function updateGroups() {

}

export async function createGroup () {

}
