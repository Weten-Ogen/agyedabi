import React from 'react'
import { Quiz } from './quiz'
import { fakeer } from '../../../../table/quiz'

export default function page() {
  return (
    <div className='mt-20'>
      <Quiz
        quizData={fakeer}

      />
    </div>
  )
}
