import './App.css'
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Quiz from'./Component/Quiz'
import Result from './Component/Result'





function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Quiz' element={<Quiz />}></Route>
        <Route path='/Result' element={<Result />}></Route>
      </Routes>
    </div>
  )
}

export default App