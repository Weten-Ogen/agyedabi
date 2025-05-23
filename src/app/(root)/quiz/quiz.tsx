"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { QuizQuestion } from "./quiz-question"
import { QuizResults } from "./quiz-result"
import { ChevronLeft, ChevronRight } from "lucide-react"


interface QuizProps {
  quizData: any
}

export function Quiz({ quizData }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<any[]>(quizData.questions.map(() => ({ selectedOptions: [] })))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1
  const isFirstQuestion = currentQuestionIndex === 0

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100

  // Check if all questions have been answered
  const allQuestionsAnswered = userAnswers.every((answer) => answer.selectedOptions.length > 0)

  // Handle answer selection
  const handleAnswerSelect = (selectedOptions: string[]) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[currentQuestionIndex] = { selectedOptions }
    setUserAnswers(updatedAnswers)
  }

  // Navigation handlers
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsSubmitted(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  // Submit quiz
  const handleSubmit = () => {
    setShowResults(true)
  }

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers(quizData.questions.map(() => ({ selectedOptions: [] })))
    setIsSubmitted(false)
    setShowResults(false)
  }

  if (showResults) {
    return <QuizResults quizData={quizData} userAnswers={userAnswers} onRestart={handleRestart} />
  }

  return (
    <Card className="w-full max-w-[80%] mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>{quizData.title}</CardTitle>
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </span>
        </div>
        <CardDescription>{quizData.description}</CardDescription>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>

      <CardContent>
        <QuizQuestion
          question={currentQuestion}
          selectedOptions={userAnswers[currentQuestionIndex].selectedOptions}
          onAnswerSelect={handleAnswerSelect}
        />
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPreviousQuestion}
          disabled={isFirstQuestion}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>

        <div>
          {isSubmitted ? (
            <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="ml-auto">
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={goToNextQuestion} className="flex items-center gap-1">
              {isLastQuestion ? "Review Answers" : "Next"}
              {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
