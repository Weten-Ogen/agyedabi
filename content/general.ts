
import { Cog, Cpu, LampDesk, LayoutDashboard, Monitor } from "lucide-react"
export const AdminContent = {
    appName:"agyedabi",
    HeroTestimonials: [
        {
        id:"1",
    content:'Joining Agyedabi was a turning point in my career. The support, mentorship, and resources I received gave me the clarity and confidence I needed to aim higher. Just weeks after joining, I landed an interview with Turing  a global remote company that pays no less than $500. I never imagined I could attract such an opportunity so quickly. I’m incredibly grateful to the Agyedabi community for believing in me and helping me take this leap. This is just the beginning.',
    email:"sarahobenewaoben@gmail.com",
    href:`testimonials/${1}`,
    imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.19%20AM-HGv9SSx9CG4lazoot7XQNRmFTuyr4B.jpeg',
    name:'Sarah Obeng'
        },
        {
            id:"2",
        content:"Before joining Agyedabi, I had the passion but lacked the direction and structure to turn my interest in tech into a career. That all changed the moment I stepped into this bootcamp. Agyedabi didn’t just teach me how to code ,they helped me believe in my potential.The mentorship is real, the projects are practical, and what really stands out is how they support us beyond the classroom. Through Agyedabi, I’ve landed freelance gigs that are helping me build my portfolio and earn while I learn.And the flexible payment plan? That made it possible for me to even start this journey without financial pressure holding me back. Agyedabi is more than a bootcamp . it's a community that’s changing lives, including mine.",
        email:"esther373addo@gmail.com",
        href:`testimonials/${2}`,
        imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.20%20AM%20%281%29-Wowu3HOGwFAzsFmNVkuEWSMbb7JNl9.jpeg',
        name:'Esther Ohenewaa Abena Addo'
        },
    {
    id:'3',
    content:"My journey with Agyedabi has been nothing short of transformative. I used to wonder if tech was really for me  now I know it is. From day one, the bootcamp provided not just skills, but confidence, structure, and access.One of the most impactful things for me was how they connected us to real freelance opportunities. I never imagined I’d be building things for actual clients so early in my learning journey.And the flexible payment option took away a huge burden. I didn’t have to choose between chasing my dreams and affording them. Agyedabi made this education accessible, and in doing so, they’ve opened doors I never thought possible.If you’re looking for more than just a bootcamp . if you want a lifeline into tech , this is the place.",
    email:"mintanaAlexi202@gmail.com",
    href:`testimonials/${3}`,
    imageUrl:'https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%2010.20.20%20AM-PpPesxCVVjuNfqxjcpAYpHUHQZRXyh.jpeg',
    name:'Alexander Mintah'
    },
    ],
    HeroAccordion:[
        {
            id:'1',
            callToAction:'update profile',
            content:'Welcome to Agyedabi!,We’re excited to have you on board.To get started, please update your profile with accurate and complete information. This helps us understand your background, tailor your learning experience, and connect you with the right opportunities.A well-filled profile not only enhances your bootcamp journey but also increases your chances of landing gigs afterward. The more we know about you, the better we can support you , every step of the way.Let’s build your future, together.',
            href:`/profile/update/${1}`,
            title:"Have you update your profile Page ?",
            imageUrl:"/neural.jpg"
         },
         {
            id:'2',
            callToAction:'join course',
            content:"Getting Started at Agyedabi.To begin your journey, you'll need to register by paying a small fee. While some courses may cost less, our official full program requires a $100 registration fee.You're welcome to explore other options, but if your goal is to land a tech gig with our support, we highly recommend enrolling in the official program. It’s built to equip you with the in-demand skills, personalized mentorship, and hands-on experience you need to succeed in today’s tech industry.And the best part? You don’t pay the full tuition until you’ve landed a job , meaning there’s no upfront financial risk.Take the first step toward a future in tech , we’re here to help you every step of the way.",
            href:"/courses",
            title:"What do i need to do after updating my profile page ?",
            imageUrl:"/neural.jpg"
         },
         {
            id: '3',
            callToAction:'',
            content:'Important Payment Notice. All payments for Agyedabi services must be made exclusively through our official app. Please do not send money through third-party platforms, personal links, or individuals.If you receive any payment request or link claiming to represent Agyedabi, always verify its authenticity by searching “Agyedabi” on Google and using only the official app or website.We will not be responsible for any loss resulting from payments made outside our verified platforms. Stay safe — and always pay through the official channels.',
            href:"/profile/payment",
            title:"What of the payments and how to go about it?",
            imageUrl:"/neural.jpg"
         },
         {
            id:'4',
            callToAction:'contact us',
            content:'Need Help? .For any questions or concerns, please reach out to Agyedabi through the Help link available on our official channels.We’re here to support you — and to help you change your direction for the better.',
            href:"/profile/help",
            title:"Do you need help with any of this process ?",
            imageUrl:"/neural.jpg"
         },
         {
            id: '5',
            callToAction:'make payment',
            content:"Agyedabi is Not a School — It’s a Skill ShopAt Agyedabi, we don’t operate like a traditional school. We’re a shop for skills — focused on helping you learn what matters and land real gigs.The registration fee is not just a payment — it’s your way of showing commitment and securing a slot in the course. While we’d love to teach everyone at once, we prioritize quality over quantity, ensuring every learner gets the attention and guidance they need.This fee also helps cover the initial setup and preparation needed to kick-start your learning journey.We're here to help you grow — one skill, one gig, and one step at a time.",
            href:"/profile/payment",
            title:"Why do I make need to make registrations payments two weeks before start date ?",
           
         },
    ],
    Herobilling: [
        {
            course: "Official Course",
            description:"Our official course on Agyedabi teaches programming with a highly professional and pratical approach , making it exciting and accessible for everyone- regardless of  background or experience . With hands-on projects, and real-world internships, we turn coding into a skill you'll enjoy  learning and confidently applying. All  are welcome . ",
            href:"/courses",
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
            href:"/courses",
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
            href:"/courses",
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
                heading: "You need to be Assigned to a Course and get Vetted .",
                text1:" Update your profile page with your personnal details. Do not falsify any details. We accept everyone who is honest. ",
                text2:"We will reach out to you  for the vetting. We vet only for English Languge . If you wish not to go with our jobs. That will not be needed. We do not charge our tuition upfront , but you may need to pay for the course registration.",
                text3:"Our goal is to create more jobs for the african youth by 2027 . Our expected index is aiming at six million jobs for the youth. Be part of our dream."
            },
            ongoing:{
                heading: "Happy learning , we wish you all the best of luck",
                title:"Keep the fire burning , you are almost there."
            },
            completed:{
                heading: "You have successfully made it.Now let burn more candles.`",
                title: "You have officially completed all courses you joined on this site.",
                joblink: "https://www.turing.com" 
            },
            unvetted:{
                title: "Welcome  to Agyedabi  Platform.",
                heading: "Do not make any payment, if you are not vetted .",
                text:"We are web mentoring platform base in ghana, that trains fullstack developers in 6  to 12 months.We also get you gigs after the training .Our goal is to create more jobs for africans and hence our main target is people base in africa or african's around the globe. Our platform has a pratical approach to teaching and during the training process you will be assigned to real global companies just to build you a profile of 4 years experience developer. When you are complete our course , you will be instantly become  a 4 year experience developer because  the process is meant to expose you to real life issues a 4 years web developer faces daily and the kind of roles you will do.We humbly request you commit to this course fully to experience a change in the direction of your life."
            }
        }
        
    },
    courseContent:{
        courseinfo:{
            heading:"Course tailored to meet mordern demands.",
            subHeading:"Registrations fees are to be paid  a month before the course starts or you will be pushed to the next enrollments.",
        },
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