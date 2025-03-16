import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  
  const [category,setCategory] = useState("general");

  return (
    <>
      <div>
          <Navbar setCategory={setCategory}/>
          <NewsBoard category={category}/>
      
      </div>
    </>
  )
}

export default App
