import {z} from 'zod'

export const UserUpdateProfileSchema = z.object({
    name:z.string(),
    contact:z.string().optional(),
    email: z.string(),
    country:z.string().optional(),
    city:z.string().optional(),
    bio:z.string().optional(),
    arrears: z.string().optional(),    
})

