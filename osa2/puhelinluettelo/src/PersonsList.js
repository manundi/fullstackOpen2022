
const PersonsList = ({persons, handleRemove}) =>{
    return(
        <ul> 
            {persons.map(person =>
           
                <li key={person.id}>
                    {person.name} {person.tel}  
                    <button 
                    key={person.id} 
                    onClick={()=>handleRemove(person.id)}>
                    DELETE</button>
                </li>
            )} 
        </ul> 
    ) 
}

 
export default PersonsList