import { useState, useEffect } from "react";
import AddPersonForm from "./AddPersonForm";
import PersonsList from "./PersonsList";
import FilterForm from "./FilterForm";
import contactsService from "./services/contacts";
import NotifyMessage from "./NotifyMessage";
import "./index.css";

const App = () => {
  const [persons,setPersons] = useState([])
  const [personsToShow,setPersonsToShow] = useState([])
  const [newName,setNewName] = useState('')
  const [newTel,setNewTel] = useState('')
  const [notifyMessage, setNotifyMessage] = useState(null)
  const [notifyType,setNotifyType] = useState('')


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
    let persontoUpdate = persons.find(person => person.name === newPerson.name)
    if(persontoUpdate){
      let update = window.confirm(`${newPerson.name} is already in contacts, do you want to update the number with ${newPerson.tel}`)
      if(!update)return
      persontoUpdate.tel = newTel
      setNewTel('')
      setNewName('')
      setNotifyType('success')
      setNotifyMessage(`${persontoUpdate.name} updated`)
      return
    }
    contactsService.create(newPerson)
      .then(response =>
        setPersons(persons.concat(response))
        )
      .then(
        setNotifyType('success'),
        setNotifyMessage(`${newPerson.name} added to your contacts`)
        //console.log(response)
          )
      .catch(error => alert(error))

    event.target.reset()
  }

  const handleRemove = (id) =>{
    contactsService.remove(id)
      .then(() => {
      let newContacts = Array.from(persons)
      newContacts = newContacts.filter(p => p.id !== id)
      setPersons(newContacts)
      })
      .catch(setNotifyType('error'), setNotifyMessage('Person already removed from server')) 
  }

  const handleFilter = (event) =>{
    event.preventDefault()
    let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersonsToShow(filteredPersons)
  }

  useEffect(() =>{
    setPersonsToShow(persons)
  },[persons])

  useEffect(() =>{
    contactsService.getAll()
      .then(initialContacts => setPersons(initialContacts))
      .catch(error => alert(error.data))  
  },[])
  
  return (
  <>
    
    <h2>Phoneboook</h2>
    <h2>Add New:</h2>
    <AddPersonForm handleNameChange={handleNameChange} handleTelChange={handleTelChange} handleSubmit={handleSubmit}/>
    <NotifyMessage type={notifyType} message={notifyMessage}/>
    <FilterForm handleChange={handleFilter}/>
    <h2>Numbers:</h2>
    <PersonsList persons={personsToShow} handleRemove={handleRemove} />
  </>
  );
}

export default App;
