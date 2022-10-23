import { useState } from "react";
import Contact from "./Contact";

const App = () => {
const [persons,setPersons] = useState([
  {name : "Arto Hellas"}
])
const [newName,setNewName] = useState('')

const handleChange = (event) =>{
  event.preventDefault()
  setNewName(event.target.value)
}
const handleSubmit = (event) =>{
  event.preventDefault()
  let newPerson = {}
  newPerson.name = newName
  if(persons.find(person => person.name === newPerson.name)){
    alert(`${newPerson.name} is already in contacts`)
    return
  }
 
  setPersons(persons.concat(newPerson))
  event.target.reset()
}
  return (
  <>
  <h2>Phoneboook</h2>
  <form onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleChange}></input>
    </div>
    <div> 
      <button type="submit" onChange={handleChange}>add</button>
    </div>

  </form>
  <h2>Numbers</h2>
  <ul>
    {persons.map(person => <Contact key={person.name} person={person}/>)}
   
  </ul>

  DEBUG: {newName}
  </>
  );
}

export default App;
