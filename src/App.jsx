
import './App.css'
import Board from './components/board.jsx'
import { useState } from 'react'

function App() {
  const [selectedLevel, setSelectedLevel] = useState('')
  const [accepted, setAccepted] = useState('')
  const handleClick = ()=>{
   return setAccepted(selectedLevel)
  }
  return (
    <>
    <header>
      <h1>Hell minesweeper</h1>
       <label>
        Choose level: 
      <select 
          onChange={e => setSelectedLevel(e.target.value) }
        >
        <option value=""></option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hardcore</option>
      </select>
      <button onClick={()=>{handleClick()}}> {`Let's Go!`}</button>
      </label>
    </header>
        {accepted === '' ? '' : 

        <Board level= {accepted}/>
        }

    </>
  )
}

export default App
