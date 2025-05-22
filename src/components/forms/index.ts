import {z} from 'zod'

export const UserUpdateProfileSchema = z.object({
    name:z.string(),
    contact:z.string().optional(),
    email: z.string(),
    country:z.string().optional(),
    city:z.string().optional(),
    bio:z.string().optional(),
    address:z.string().optional()
       
})

export const UserAssignmentProfileSchema = z.object({
    lectureNumber:z.string(),
    course:z.string(),
    submissionDate:z.string(),
    result:z.string(),
})

export const ReportFormSchema = z.object({
    title:z.string().optional(),
    message:z.string(),
   
})

export const PaymentFormSchema = z.object({
    userId:z.string(),
    method:z.string(),
    amount:z.string(),
})