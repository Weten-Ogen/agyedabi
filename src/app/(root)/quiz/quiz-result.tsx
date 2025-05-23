"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface QuizResultsProps {
  quizData:any
  userAnswers: any[]
  onRestart: () => void
}

export function QuizResults({ quizData, userAnswers, onRestart }: QuizResultsProps) {
  // Calculate score
  const calculateScore = () => {
    let correctAnswers = 0

    quizData.questions.forEach((question:any, index:any) => {
      const userAnswer = userAnswers[index]

      if (question.type === "single") {
        // For single-select questions, check if the selected option is correct
        if (userAnswer.selectedOptions[0] === question.correctAnswer[0]) {
          correctAnswers++
        }
      } else {
        // For multi-select questions, all correct options must be selected and no incorrect ones
        const isCorrect =
          question.correctAnswer.every((answer:any) => userAnswer.selectedOptions.includes(answer)) &&
          userAnswer.selectedOptions.every((answer:any) => question.correctAnswer.includes(answer))

        if (isCorrect) {
          correctAnswers++
        }
      }
    })

    return {
      score: correctAnswers,
      total: quizData.questions.length,
      percentage: Math.round((correctAnswers / quizData.questions.length) * 100),
    }
  }

  const result = calculateScore()

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
        <CardDescription>
          You scored {result.score} out of {result.total} ({result.percentage}%)
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {quizData.questions.map((question:any, index:any) => {
          const userAnswer = userAnswers[index]
          let isCorrect = false

          if (question.type === "single") {
            isCorrect = userAnswer.selectedOptions[0] === question.correctAnswer[0]
          } else {
            isCorrect =
              question.correctAnswer.every((answer:any) => userAnswer.selectedOptions.includes(answer)) &&
              userAnswer.selectedOptions.every((answer:any) => question.correctAnswer.includes(answer))
          }

          return (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium">{question.text}</h3>
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>

              <div className="mt-3 space-y-2">
                {question.options.map((option:any) => {
                  const isSelected = userAnswer.selectedOptions.includes(option.id)
                  const isCorrectOption = question.correctAnswer.includes(option.id)

                  let className = "p-2 rounded text-sm flex items-center"

                  if (isSelected && isCorrectOption) {
                    className += " bg-green-100 text-green-800"
                  } else if (isSelected && !isCorrectOption) {
                    className += " bg-red-100 text-red-800"
                  } else if (!isSelected && isCorrectOption) {
                    className += " bg-blue-50 text-blue-800"
                  }

                  return (
                    <div key={option.id} className={className}>
                      {option.text}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </CardContent>

      <CardFooter>
        <Button onClick={onRestart} className="w-full">
          Restart Quiz
        </Button>
      </CardFooter>
    </Card>
  )
}
