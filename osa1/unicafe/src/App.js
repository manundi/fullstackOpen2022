import {React,useState} from "react"

const Statistics = ({good,neutral,bad}) =>{
  const All = () => good+neutral+bad
  if(All() == 0 ) return <>Click to add feedback!</>
  const Avarage = () =>{
    let Avg = (good - bad) / All()
    return Avg
  }
  const Positives = () => <>{good/All()*100} %</> 
return(
<>
<h1>Statistics </h1> <br/>
Good = {good} <br/>
Neutral = {neutral} <br/>
Bad  = {bad} <br/>
All = {All()} <br/>
Avarage ={Avarage()}<br/>
Positives = {Positives()}<br/>
</>
)

}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>  


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
  <>
    <h1>Gife FeedBakc! </h1> <br/>
    <Button text={"Good"} handleClick={() => setGood(good + 1) }/>
    <Button text={"Neutral"} handleClick={() => setNeutral(neutral + 1) }/>
    <Button text={"Bad"} handleClick={() => setBad(bad + 1) }/> <br/>

    <Statistics good={good} neutral={neutral} bad={bad} />

  </>
  )
}
export default App