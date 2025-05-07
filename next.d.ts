
interface userprops {
    id:string,
    name:string,
    image?:string,
    contact?:string,
    email?:string,
    country?:string,
    city?:string,
    bio?:string,
    createdAt:string,
    courses:string[],
    vetted?:boolean,
    status:'ongoing'  | 'completed' | 'unassigned',
    userRole: 'user'| 'admin' | 'employee',
    group:string,
    arrears?: string,
    assignment?:string,
    groupWork?:string,
    groupRole?:'lead' | 'frontend' | 'backend' | 'fullstack',
    debt?:string,
    tuition?:string,
    profilePic?:string,
}

interface courseprops {
    id:string,
    name:string,
    registrationCost:string,
    tuitionCost:string,
    timespan:string,
    lecturesNumber:string,
    startDate:string,
    endDate:string,
    classSize:string,
    image:string,
    requirements:string[]
}