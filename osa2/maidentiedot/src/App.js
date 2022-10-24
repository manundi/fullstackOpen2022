import axios from "axios"
import { useState, useEffect } from "react"
import CountryList from "./CountryList"

const App = () =>{
  const [allCountries,setAllCountries] = useState([])
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res =>{
        setAllCountries(res.data)
      }) 
  },[])
 
  const handleChange = (event) =>{
    const filtered = allCountries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setCountryList(filtered)
  }
  return(   
    <div>
      Find countries: <input onChange={handleChange} ></input>
       <CountryList countries={countryList}/>   
    </div>
  )
}

export default App
