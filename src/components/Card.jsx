import React from "react"

import Button from "./Button"
import Question from "./Question"

export default function Card( { question, correct_answer, incorrect_answers, category, type, difficulty } ) {
   return (
      <div className="bg-gray-700 w-1/2 h-auto">
         <Question value={question} />
      </div>
   )
}