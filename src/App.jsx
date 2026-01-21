import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import ProjectAdder from './components/ProjectAdder'
import './App.css'

function App() {

  return (
    <>
    <h1>Personal Project Showcase App</h1>
    <ProjectAdder/>

    <ProjectCard/>
    </>
  )
}

export default App
