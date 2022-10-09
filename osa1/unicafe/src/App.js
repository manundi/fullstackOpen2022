import {React,useState} from "react"
const StatisticLine = ({text,value}) => <tr><td>{text} = </td><td>{value}</td></tr>

const Statistics = ({good,neutral,bad}) =>{

  const all = () => good+neutral+bad
  if(all() == 0 ) return <>Click to add feedback!</>
  const average = () =>{
    let avg = (good - bad) / all()
    return avg
  }

  const positives = () => <>{good/all()*100} %</> 
return(
<>
<h1>Statistics </h1> <br/>
<table>
  <tbody>
  <StatisticLine text={"Good"} value={good}/>
  <StatisticLine text={"Neutral"} value={neutral}/>
  <StatisticLine text={"Bad"} value={bad}/>
  <StatisticLine text={"All"} value={all()}/>
  <StatisticLine text={"Average"} value={average()}/>
  <StatisticLine text={"Positives"} value={positives()}/>
  </tbody>
</table>


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