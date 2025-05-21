import {z} from 'zod';


export const CourseSchema = z.object({
    name:z.string(),
    registrationCost:z.string(),
    tuitionCost:z.string(),
    timespan:z.string(),
    lectureNumber:z.string(),
    startDate:z.string(),
    endDate:z.string(),
    classSize:z.string(),
    image:z.string().optional(),
    requirements:z.string()

})