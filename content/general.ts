import HeroAccordion from "@/components/customs/heroaccordion"
import Hero from "@/components/hero/hero"
import { Cog, Cpu, LampDesk, LayoutDashboard, Monitor } from "lucide-react"
export const AdminContent = {
    appName:"agyedabi",
    HeroAccordion:[
        {
            id:'1',
            callToAction:'update profile',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi velit facere asperiores blanditiis. Cum minus id recusandae ducimus ipsam. Facilis labore sint error dolorem. Temporary voluntate tenetur quo veritatis.',
            href:"/profile/update/1",
            title:"Have you update your profile Page?!!!!!!",
            imageUrl:"/neural.jpg"
         },
         {
            id:'2',
            callToAction:'join course',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi velit facere asperiores blanditiis. Cum minus id recusandae ducimus ipsam. Facilis labore sint error dolorem. Temporary voluntate tenetur quo veritatis.',
            href:"/profile/course/1",
            title:"Have join a course yet?!!!!!!",
            imageUrl:"/neural.jpg"
         },
         {
            id: '3',
            callToAction:'make payment',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi velit facere asperiores blanditiis. Cum minus id recusandae ducimus ipsam. Facilis labore sint error dolorem. Temporary voluntate tenetur quo veritatis.',
            href:"/profile/profile/payment",
            title:"Have you made your registration payment?",
            imageUrl:"/neural.jpg"
         },
         {
            id:'4',
            callToAction:'contact us',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi velit facere asperiores blanditiis. Cum minus id recusandae ducimus ipsam. Facilis labore sint error dolorem. Temporary voluntate tenetur quo veritatis.',
            href:"/profile/help",
            title:"Do you need help with any of this process",
            imageUrl:"/neural.jpg"
         }
    ],
    Herobilling: [
        {
            course: "Official Course",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus dolor error totam temporibus nesciunt ipsa amet. In, numquam? Quae?",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Live Tutoring",
                "Real Projects",
                "Internship with Global Companies",
                "Job Matching",
                "A strong Community"
            ]
        },
        {
            course: "Rust Development",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus dolor error totam temporibus nesciunt ipsa amet. In, numquam? Quae?",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Live Tutoring",
                "Real Projects",
                "Internship with Global Companies",
                "Job Matching",
                "A strong Community"
            ]
        },
        {
            course: "Legacy C / C++",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus dolor error totam temporibus nesciunt ipsa amet. In, numquam? Quae?",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Live Tutoring",
                "Real Projects",
                "Internship with Global Companies",
                "Job Matching",
                "A strong Community"
            ]
        },
    ],
    heroContent:{
        services:[
            {
                icon: Monitor,
                label:"Live Tutoring",
                content:"We offer you live tutoring and mentoring during the course of your study. We believe the best way to teach is the feel of reality .",
            },
            {
                icon:LayoutDashboard,
                label:"Perfect Scheduling",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e"
            },
            {
                icon:LampDesk,
                label:"Job Matching",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e"
            },
            {
                icon:Cpu,
                label:"Indept Programming",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e"
            },
            {
                icon:Cog,
                label:"Precise Tasking",
                content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e"
            },
        ],
            heroParagraph: "change the direction",
            heroHeading: "the fasters way of becoming an experience software engineer.",
            heroSubHeading:"We develop professionally experience software engineers equips for fullStack development roles. ",
            heroImage:"https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/brain-P3BgBADjpOE5fPlqI0RFRpgh0VHJz2.jpg",
    
        
    },
    adminlinks : [
        {
            label: 'users',
            description: "This is the home page",
            link: "/home"
        },
        {
            label: 'courses',
            description: "This is the home page",
            link: "/courses"
        },{
            label: 'assignments',
            description: "This is the home page",
            link: "/assignments"
        },{
            label: 'images',
            description: "This is the home page",
            link: "/admin/images"
        },
    ],
    navbarlinks:[
        {
            label: 'home',
            href:'/home',
        },
        {
            label:'courses',
            href: '/courses'
        },
        {
            label: 'assignments',
            href: '/assignments'
        },
        {
            label:'profile',
            href:'/profile'
        }
    ],
   
    homeContent: {
        homeImage:"https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/brain-P3BgBADjpOE5fPlqI0RFRpgh0VHJz2.jpg",
        homeTexts:{
            heading: "Do not make any payment, if you are not vetted .",
            subheading:"We have a two factor verification for payments systems. You will need to first message the Admin. Then update confirm payment section afterwards.",
            unassigned: {
                title: " you are not assigned to any course.",
                text1:" Update your profile page with your personnal details. Do not falsify any details. We accept everyone who is honest. ",
                text2:"We will reach out to you  for the vetting. We vet only for English Languge . If you wish not to go with our jobs. That will not be needed. We do not charge our tuition upfront , but you may need to pay for the course registration.",
                text3:"Our goal is to create more jobs for the african youth by 2027 . Our expected index is aiming at six million jobs for the youth. Be part of our dream."
            },
            ongoing:{
                title:"Keep the fire burning , you are almost there."
            },
            completed:{
                title: "You have officially completed all courses you joined on this site.",
                
            },
            unvetted:{
                title: "Welcome  to Agyedabi  Platform.",
                text:"We are web mentoring platform base in ghana, that trains fullstack developers in 6  to 12 months.We also get you gigs after the training .Our goal is to create more jobs for africans and hence our main target is people base in africa or african's around the globe. Our platform has a pratical approach to teaching and during the training process you will be assigned to real global companies just to build you a profile of 4 years experience developer. When you are complete our course , you will be instantly become  a 4 year experience developer because  the process is meant to expose you to real life issues a 4 years web developer faces daily and the kind of roles you will do.We humbly request you commit to this course fully to experience a change in the direction of your life."
            }
        }
        
    },
    courseContent:{
        courseinfo:{
            heading:"Course tailored to meet mordern demands.",
            subHeading:"Registrations fees are to be paid  a month before the course starts or you will be pushed to the next enrollments.",

        }
        ,
        courselist: [
            {
                id:"1",
                image:"",
                name: "Rust Development",
                registrationCost:"100$",
                tuitionCost:"2600$",
                timespan:"6 months",
                lecturesNumber:"10",
                startDate:"August",
                endDate:"february",
                classSize:"500",
                requirements:['laptop','access to internet','typing speed average of 2wpm']
            },
                {
                    id:"2",
                    image:"",
                    name: "Official Fullstack Development",
                    registrationCost:"100$",
                    tuitionCost:"2600$",
                    timespan:"6 months",
                    lecturesNumber:"10",
                    startDate:"August",
                    endDate:"february",
                    classSize:"500",
                    requirements:['laptop','access to internet','typing speed average of 2wpm']
                },
                    {
                        id:"3",
                        image:"",
                        name: "Mobile Development",
                        registrationCost:"100$",
                        tuitionCost:"2600$",
                        timespan:"6 months",
                        lecturesNumber:"10",
                        startDate:"August",
                        endDate:"february",
                        classSize:"500",
                        requirements:['laptop','access to internet','typing speed average of 2wpm']
                    },
                    {
                        id:"4",
                        image:"",
                        name: "Mobile Development",
                        registrationCost:"100$",
                        tuitionCost:"2600$",
                        timespan:"6 months",
                        lecturesNumber:"10",
                        startDate:"August",
                        endDate:"february",
                        classSize:"500",
                        requirements:['laptop','access to internet','typing speed average of 2wpm']
                    },
                    {
                        id:"5",
                        image:"",
                        name: "Mobile Development",
                        registrationCost:"100$",
                        tuitionCost:"2600$",
                        timespan:"6 months",
                        lecturesNumber:"10",
                        startDate:"August",
                        endDate:"february",
                        classSize:"500",
                        requirements:['laptop','access to internet','typing speed average of 2wpm']
                    },
        ]
    }
}

export const fakeuser = {
        courses: ['official Course','rust development','python for anything'],
             createdAt: '12/05/20',
             group: '',
             id : '1',
             name: "Marcus gideon oware",
             status:'ongoing',
             userRole:'user',
             arrears:'50',
             assignment:'build a card component that has an animation of anything you like.',
             bio:'I am full stack develop with 4 year of practical and professional experience.',
             city:'kumasi',
             contact:'0538578421',
             country:'ghana',
             debt:'0',
             email:'marcuoware@gmail.com',
             groupRole:'lead',
             groupWork:'Build a full chat application that is used by student ',
             image:'',
             profilePic:'',
             tuition:'2600',
             vetted:true,
}


export const fakenotice = [
    {
        id:'1',
        message:'This is try Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!out ',
        image: ""

    },{
        id:'2',
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e",
        image:''
    },
    {
        id:"2",
        message:' This istLorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet similique tenetur tempora. Voluptatibus officiis commodi saepe tempore repudiandae nesciunt voluptates!e',
        image: ''
    }

]

export const services = [
    {
      label:"courses",
      href:'/courses'
    },
    {
      label:'jobs',
      href:"/jobs"
    },
    {
      label:'profile',
      href:"/profile"
    }
  ]
  
export   const information = [
    {
      label:"pricing",
      href:'/courses'
    },
    {
      label:'reviews',
      href:"/reviews"
    },
    {
      label:'referral program',
      href:"/referrals"
    }
  ]
  export const navigation = [
        {
          label:"courses",
          href:'/courses'
        },
        {
          label:'jobs',
          href:"/jobs"
        },
        {
          label:'profile',
          href:"/profile"
        }
,      
        {
          label:"pricing",
          href:'/courses'
        },
        {
          label:'reviews',
          href:"/reviews"
        },
        {
          label:'referral program',
          href:"/referrals"
        }
      ,
        {
          label:"matching",
          href:'/match'
        },
        {
          label:'jobs',
          href:"/jobs"
        },
        {
          label:'courses',
          href:"/courses"
        },
      
      
  ]
 export  const solutions = [
    {
      label:"matching",
      href:'/match'
    },
    {
      label:'jobs',
      href:"/jobs"
    },
    {
      label:'courses',
      href:"/courses"
    },
  ]