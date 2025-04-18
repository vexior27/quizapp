import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Card from './components/Card'

function App() {

  const [data, setData] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null) 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleNextQuestion = (answer) => {
    console.log("test")
    setSelectedAnswer(answer)
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10", {
          method: 'GET'
        })
        if(!response.ok) {
          throw new Error("Network error!")
        }
        const result = await response.json()
        setData(result.results)
      }
      catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-gray-600 w-full h-screen'>
      {data.length > 0 && currentQuestionIndex < data.length ? (
      <Card {...data[currentQuestionIndex]} onAnswerClick={handleNextQuestion} />
    ) : (
      <h2 className="text-white text-center pt-20 text-2xl">No more questions or loading...</h2>
    )}
    <h2 className="text-white text-center">{selectedAnswer}</h2>
    </div>
  )
}

export default App
