
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
    lectureNumber:string,
    startDate:string,
    endDate:string,
    classSize:string,
    image?:string,
    requirements:string
}

interface assignmentprops {
    id:string,
    lectureNumber:string,
    course:string,
    submissionDate:string,
    question:string,
    result:string,
    createdAt:string,
}

interface servicesprops {
    label:string,
    content:string,
    icon:React.ReactElement

}

interface testimonialprops {
    name:string,
    imageUrl:string,
    content:string,
    href:string,
    email:string,

}

interface aboutprops {
    heading:string,
    content:string,
    imageUrl:string,
    callToAction:string
    href:string,
}

interface billingprops {
    course:string,
    description:string,
    price:string,
    imageUrl:string,
    callToAction:string,
    href:string,
    herolist:string[]
}

interface requirementprops {
    label:string,
    icon:string,
    callToAction:string,
    Href:string,
    content:string,
}

interface listprops {
    label:string,

}
interface heroaccordprops {
    id:string
    title:string,
    content:string,
    callToAction?:string,
    imageUrl?:string,
    href:string,
}

interface jobpoolprops {
    label:string,
    content:string,
    imageUrl:string,
    callToAction:string,
    href:string,
}

interface herofooterlinkprops {
    label:string,
    href:string,
}

interface reportprops {
    sender: string,
    title?:string,
    message: string,
   
}