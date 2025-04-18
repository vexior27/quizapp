import React from "react"

import Button from "./Button"
import Question from "./Question"
import Category from "./Category"
import Difficulty from "./Difficulty"

export default function Card({ question, correct_answer, incorrect_answers, category, type, difficulty, onAnswerClick }) {
   return (
      <div className="bg-gray-700 absolute w-1/2 h-1/2 rounded-3xl left-1/4 top-1/4 p-5">
         <Category cat={category}/>
         <Difficulty diff={difficulty} />
         <Question value={question} />
         <div className="grid grid-cols-2 gap-2 w-full h-1/3">
            <Button value={correct_answer} onClick={() => onAnswerClick(correct_answer)}/>
            {
               incorrect_answers.map((answer, index) => (
                  <Button key={index} value={answer} onClick={() => onAnswerClick(answer)}/>
               ))
            }
         </div>
      </div>
   )
}