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

export async function updateUserById(values:any) {
   const user = await prisma.user.update({
    where:{
        email: values.email
    },
    data:{
        address: values.address,
        bio: values.bio,
        city:values.city,
        name:values.name,
        email:values.email,
        country:values.country,
        contact:values.contact,
        occupation:values.occupation, 
    }
   })
}

export async function deleteUserById(id:string) {
   
}

export async function deleteUsers(data:FormData) {
    
}


export async function updateUsers() {

}

export async function createUser () {
   
}
