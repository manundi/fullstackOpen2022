import Contact from "./Contact"
const PersonsList = ({persons}) =><ul> {persons.map(person => <Contact key={person.name} person={person}/>)} </ul>
 
export default PersonsList