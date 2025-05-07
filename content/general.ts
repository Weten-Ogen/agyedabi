export const AdminContent = {
    appName:"agyedabi",
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
    heroContent: {
        heroParagraph: "change the direction",
        heroHeading: "the fasters way of becoming an experience software engineer.",
        heroSubHeading:"We develop professionally experience software engineers equips for fullStack development roles. ",
        heroImage:"https://ras5rd0eb4njkcel.public.blob.vercel-storage.com/brain-P3BgBADjpOE5fPlqI0RFRpgh0VHJz2.jpg",

    },
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