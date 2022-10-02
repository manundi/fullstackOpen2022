import { useState } from "react";

const App = () => {
const [counter, setCounter] = useState(0)

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick,text}) =>{
    <button onClick={handleClick}> {text}</button>
}
const increaseCounter = () =>  setCounter(counter+1)
const decreaseCounter = () =>  setCounter(counter-1)
const zeroCounter = () => setCounter(0)

return(
<>
  <Display counter= {counter}/>
  <Button handleClick={increaseCounter} text="lisaa"/> 
  <Button handleClick={zeroCounter} text="nollaa"/> 
  <Button handleClick={decreaseCounter} text="vahenna"/> 
</>

)

}
export default App