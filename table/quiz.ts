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
