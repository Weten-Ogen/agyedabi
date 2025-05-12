'use server'
import { revalidatePath } from 'next/cache'
import {prisma} from '../../lib/db'

export async function getUserById(id:string){
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })
    return user
}

export async function updateUserById(id:string) {
   
}

export async function deleteUserById(id:string) {
   
}

export async function deleteUsers(data:FormData) {
    
}


export async function updateUsers() {

}

export async function createUser () {
   
}
