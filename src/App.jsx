import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Card from './components/Card'

function App() {

  const [data, setData] = useState([])

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

  console.log(data)


  return (
    <>
      {
        data.map((el, index) => (
          <Card key={index} {...el} />
        ))
      }
    </>
  )
}

export default App
