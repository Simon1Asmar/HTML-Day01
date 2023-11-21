import React from 'react'

import './Quiz.css'

import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q2 from './Q2'

export default function Quiz() {
  return (
    <div className='quiz'>
      <QuizTitle/>
      <Q1/>
      <Q2/>
    </div>
  )
}
