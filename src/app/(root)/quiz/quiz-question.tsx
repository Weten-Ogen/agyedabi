"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface QuizQuestionProps {
  question: any
  selectedOptions: string[]
  onAnswerSelect: (selectedOptions: string[]) => void
}

export function QuizQuestion({ question, selectedOptions, onAnswerSelect }: QuizQuestionProps) {
  // Handle single selection (radio buttons)
  const handleSingleSelect = (value: string) => {
    onAnswerSelect([value])
  }

  // Handle multiple selection (checkboxes)
  const handleMultipleSelect = (option: string, checked: boolean) => {
    if (checked) {
      onAnswerSelect([...selectedOptions, option])
    } else {
      onAnswerSelect(selectedOptions.filter((item) => item !== option))
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>

      {question.type === "single" ? (
        <RadioGroup value={selectedOptions[0] || ""} onValueChange={handleSingleSelect} className="space-y-3">
          {question.options.map((option:any) => (
            <div
              key={option.id}
              className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-3">
          {question.options.map((option: any) => (
            <div
              key={option.id}
              className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <Checkbox
                id={option.id}
                checked={selectedOptions.includes(option.id)}
                onCheckedChange={(checked) => handleMultipleSelect(option.id, checked === true)}
              />
              <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                {option.text}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
