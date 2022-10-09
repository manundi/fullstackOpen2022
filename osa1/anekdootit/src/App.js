import {React, useState} from 'react'

const Winner = (props) =>{ 
  return(
    <>
    <h1>Winner:</h1> <br/>
    {props.value}
    </>
  )
}

const App = () =>{
  const [random, setRandom] = useState(0)
 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const handleRandom = () => setRandom(Math.floor(Math.random()* anecdotes.length))

  const handlePoints = () => {
    const newPoints = [...points]
    newPoints[random] += 1
    setPoints(newPoints)
  }

  const getPoints = () => points[random]

  const getWinner = () =>{
  const max = Math.max(...points)
  const indexOfMax = points.indexOf(max)
  return anecdotes[indexOfMax]
  } 

  return(
    <>
    <button onClick={() => handlePoints()}>Vote! </button>
    <button onClick={ () => handleRandom()} > Get Anecdote!</button> <br/>
    <h1>  Anecdote Generator</h1><br/>
    {anecdotes[random]} <br/>
    Has {getPoints()} points<br/> 
    <Winner value={getWinner()}/>
    </>
  )
}
export default App