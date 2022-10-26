import { useState, useEffect } from "react";
import AddPersonForm from "./AddPersonForm";
import PersonsList from "./PersonsList";
import FilterForm from "./FilterForm";
import contactsService from "./services/contacts";

const App = () => {
  const [persons,setPersons] = useState([])
  const [personsToShow,setPersonsToShow] = useState([])
  const [newName,setNewName] = useState('')
  const [newTel,setNewTel] = useState('')

  const handleNameChange = (event) =>{
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleTelChange = (event) =>{
    event.preventDefault()
    setNewTel(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    let newPerson = {}
    newPerson.name = newName
    newPerson.tel = newTel
    if(persons.find(person => person.name === newPerson.name)){
      alert(`${newPerson.name} is already in contacts`)
      return
    }
    //let newPersons = persons.concat(newPerson)

    contactsService.create(newPerson)
      .then(response =>
        setPersons(persons.concat(response))
        )
      .then(res => console.log(res))
      .catch(error => alert(error))
    event.target.reset()
  }

  const handleFilter = (event) =>{
    event.preventDefault()
    let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersonsToShow(filteredPersons)
  }

  useEffect( () =>{
    console.log("Perons muttui")
    console.log(persons)
    setPersonsToShow(persons)
  },[persons])

  useEffect(() =>{
    console.log("efekti")
    contactsService.getAll()
      .then(initialContacts => setPersons(initialContacts))
      .catch(error => alert(error.data))
      
  },[])
  
  return (
  <>
    <h2>Phoneboook</h2>
    <h2>Add New:</h2>
    <AddPersonForm handleNameChange={handleNameChange} handleTelChange={handleTelChange} handleSubmit={handleSubmit}/>
    <FilterForm handleChange={handleFilter}/>
    <h2>Numbers:</h2>
    <PersonsList persons={personsToShow}/>
  </>
  );
}

export default App;
