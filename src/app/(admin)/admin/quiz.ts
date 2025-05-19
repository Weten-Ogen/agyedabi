export interface Option {
  id: string
  text: string
}

export interface Question {
  id: string
  text: string
  type: "single" | "multiple"
  options: Option[]
  correctAnswer: string[]
}

export interface QuizData {
  id: string
  title: string
  description: string
  questions: Question[]
}

export interface UserAnswer {
  selectedOptions: string[]
}
export const fakeer  = {
  id: '1',
  title:'free tet area',
  description : 'logo nustso decardo',
  questions: [
    {

    id: "1",
  text: "loremo shiojeio josjieojojosij oiejoi josijoe ? ",
  type:"single",
  options: [
    {
      id: "1",
      text: "Bullocks",
    },
    {
      id: "2",
      text: "locks",
    },
    {
      id: "5",
      text: "Bucks",
    },
  ],
  correctAnswer:[
    '3'
  ]}
,
{

    id: "2",
  text: "loremo shiojeio josjieojojosij oiejoi josijoe ? ",
  type:"single",
  options: [
    {
      id: "1",
      text: "Bullocks",
    },
    {
      id: "2",
      text: "locks",
    },
    {
      id: "4",
      text: "Bucks",
    },
  ],
  correctAnswer:[
    '2'
  ]}

  ,{

    id: "3",
  text: "loremo shiojeio josjieojojosij oiejoi josijoe ? ",
  type:"single",
  options: [
    {
      id: "3",
      text: "Bullocks",
    },
    {
      id: "2",
      text: "locks",
    },
    {
      id: "1",
      text: "Bucks",
    },
  ],
  correctAnswer:[
    '1'
  ]}

  ]  
}


export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "viewer"
  active: boolean
  createdAt: string
}

export const users: User[] = [
  {
    id: "728ed52f-6e86-4791-8e8a-40e3a76a651e",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    active: true,
    createdAt: "2023-01-10T00:00:00.000Z",
  },
  {
    id: "489e1d42-7506-42f3-b786-a7bf1bce333a",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "editor",
    active: true,
    createdAt: "2023-02-15T00:00:00.000Z",
  },
  {
    id: "6d7ebf42-c24e-48da-b5fa-d5a15d2e5c99",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "viewer",
    active: false,
    createdAt: "2023-03-20T00:00:00.000Z",
  },
  {
    id: "a57f22e0-5bd5-4a2b-bf1d-2b98cbcf5321",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "editor",
    active: true,
    createdAt: "2023-04-25T00:00:00.000Z",
  },
  {
    id: "e4b9d0e5-7a87-4152-9c6b-9771b9226aa7",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "viewer",
    active: true,
    createdAt: "2023-05-30T00:00:00.000Z",
  },
  {
    id: "f2a56740-3f32-42f1-a350-83ff9f54389d",
    name: "Diana Prince",
    email: "diana@example.com",
    role: "admin",
    active: false,
    createdAt: "2023-06-05T00:00:00.000Z",
  },
  {
    id: "b9a5d932-31f2-4a9f-b87a-f7235b1b91a7",
    name: "Ethan Hunt",
    email: "ethan@example.com",
    role: "viewer",
    active: true,
    createdAt: "2023-07-10T00:00:00.000Z",
  },
  {
    id: "c6d7e8f9-0a1b-2c3d-4e5f-6789abcdef01",
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    role: "editor",
    active: true,
    createdAt: "2023-08-15T00:00:00.000Z",
  },
  {
    id: "d7e8f9a0-1b2c-3d4e-5f67-89abcdef0123",
    name: "George Miller",
    email: "george@example.com",
    role: "viewer",
    active: false,
    createdAt: "2023-09-20T00:00:00.000Z",
  },
  {
    id: "e8f9a0b1-2c3d-4e5f-6789-abcdef012345",
    name: "Hannah Baker",
    email: "hannah@example.com",
    role: "editor",
    active: true,
    createdAt: "2023-10-25T00:00:00.000Z",
  },
]
