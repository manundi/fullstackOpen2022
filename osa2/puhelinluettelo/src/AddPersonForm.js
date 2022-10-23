const AddPersonForm = ({handleNameChange, handleTelChange,handleSubmit}) =>{

return(
    <form onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleNameChange}></input>
    </div>
    <div>
      phone number: <input onChange={handleTelChange}></input>
    </div>
    <div> 
      <button type="submit" onChange={handleNameChange}>add</button>
    </div>

  </form>

)}

export default AddPersonForm