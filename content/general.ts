
import { Cog, Cpu, LampDesk, LayoutDashboard, Monitor } from "lucide-react"
export const AdminContent = {
    appName:"agyedabi",
    HeroAccordion:[
        {
            id:'1',
            callToAction:'update profile',
            content:'Welcome to Agyedabi! After signing up , the first step is to update your profile with accurate details. This helps us understand your background and connect you to the right learning path. Your  updated profile also boost your chances of landing a gig after after the bootcamp. Make sure your information is complete so we can  supoprt you every step of the way.',
            href:"/profile/update/1",
            title:"Have you update your profile Page ?",
            imageUrl:"/neural.jpg"
         },
         {
            id:'2',
            callToAction:'join course',
            content:"To get started , you'll need to register  by paying a small fee- some courses may cost less ,but the official full program has  $100 regitrational fee. While you're welcome  to explore other options, we strongly recommend taking our offical course if you want us to help you get land a tech gig  afterwards. It's designed  to give you  the skills , mentorship, and real-world experience needed to succeed .Plus, we only collect the full tuition after you've secured a job- so there's no upfront risk.",
            href:"/profile/course/1",
            title:"What do i need to do after updating my profile page ?",
            imageUrl:"/neural.jpg"
         },
         {
            id: '3',
            callToAction:'make payment',
            content:'All payments  for our service must be made strictly through  the official  Agyedabi  app. Do not send money through any third-party platforms , links or individuals.if you receive a payment  request  or a link  claiming to  represent us . Please search for Agyedabi on Google  and only use the official link that leads to  our  app or website. We will not be responsible for any loss.',
            href:"/profile/profile/payment",
            title:"What of the payments and how to go about it?",
            imageUrl:"/neural.jpg"
         },
         {
            id:'4',
            callToAction:'contact us',
            content:'For any inquiries, please contact Agyedabi through the Help link on our chanels. We are here to help you change the Direction .',
            href:"/profile/help",
            title:"Do you need help with any of this process",
            imageUrl:"/neural.jpg"
         },
         {
            id: '5',
            callToAction:'',
            content:'Agyedabi is not a School. It a shop that offer you skills and helps you get a gig. The registration cost is  neccessary the communication to us that you are willing to buy a slot for the course.As we would wish to teach everyone at the same time but we can not . We more into quality over quantity.The money is also used to make some initial preparations for the process.',
            href:"/profile/profile/payment",
            title:"Why do I make need to make registrations payments two weeks before start date ?",
           
         },
    ],
    Herobilling: [
        {
            course: "Official Course",
            description:"Our official course on Agyedabi teaches programming with a highly professional and pratical approach , making it exciting and accessible for everyone- regardless of  background or experience . With hands-on projects, and real-world internships, we turn coding into a skill you'll enjoy  learning and confidently applying. All  are welcome . ",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Professional Experience",
                "Real Projects",
                "Internship with Global Companies",
                "Career guidance",
                "Skill Mastery",
                "Strong community",
                "profile building",
                "job lookups"
            ]
        },
        {
            course: "Rust Development",
            description:"Master Rust with our professional and hands-on course on Agyedabi-built for anyone who wants to write fast, safe  and modern code. Whether you're  a beginner or upgrading  your skills, this course makes systems programming exciting, pratical and future-ready . We recommend you first take our official course. This is for experience developers.",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Live Tutoring",
                "Real Projects",
                "A strong Community",
                "profile building",
                "career growth",
                
            ]
        },
        {
            course: "Legacy C / C++",
            description:"Dive into the foundations of programming  with our Legacy Course on Agyedabi, focusing on C and C++ . This course offers a deep, pratical understanding of low-level programming, giving you full control over how software works. perfect for aspiring engineers,system developers, and tech enthusiasts. This course require  some prior knowledge of programming . We highly recommend to take our official Course first.",
            href:"/",
            callToAction:"choose plan",
            imageUrl:"/neural.jpg",
            herolist:[
                "Live Tutoring",
                "Real Projects",
                "System thinking",
                "Memory Control",
                "Profile Building",
                "Strong community",
                "Career pathways"
            ]
        },
    ],
    heroContent:{
        services:[
            {
                icon: Monitor,
                label:"Live Tutoring",
                content:"Offers real-time tutoring and mentoring during studies, focusing on pratical, experience-based learning to enhance understanding.",
            },
            {
                icon:LayoutDashboard,
                label:"Perfect Scheduling",
                content:"Organizes study time efficiently to ensure balanced  and productive learning ."
            },
            {
                icon:LampDesk,
                label:"Job Matching",
                content:"Help people who complete our courses connects  to jobs that fit their skills and learning paths."
            },
            {
                icon:Cpu,
                label:"Indept Programming",
                content:"Thorough and detailed programming instruction to build strong coding skills."
            },
            {
                icon:Cog,
                label:"Precise Tasking",
                content:"We have perfect roles and tasks that shapes your experience professional enhancing your thinking  and developments as an aspiring developer."
            },
        ],
            heroParagraph: "change the direction",
            heroHeading: "grow your skills, land gigs, launch Startups. Pay us when you win.",
            heroSubHeading:"Agyedabi helps you grow your skills, find gigs or launch a startup with minimal upfront costs. We only charge when you succeed, making it easier to build your  future with confidence.",
            heroImage:"https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/ai-6e7u775qUrTRoU33SSMHlVH4W9J2qb.jpg",
    
        
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
            label:"quiz",
            href:'/quiz'
        },
        {
            label:'profile',
            href:'/profile'
        }
    ],
   
    homeContent: {
        homeImage:"https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/ai-6e7u775qUrTRoU33SSMHlVH4W9J2qb.jpg",
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

export const adminPageContent = {
    stat: [
        {
            figure: "200",
            label:"users"
        },
        {
            figure: "3",
            label:"courses"
        },
        {
            figure: "500",
            label:"communities"
        },
        {
            figure: "50",
            label:"assignments"
        },
        
    ]
}