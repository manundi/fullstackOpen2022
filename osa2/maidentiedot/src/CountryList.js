import CountryInfo from "./CountryInfo"
import { useState } from "react"

const CountryList = ({countries}) =>{
    const [oneCountry,setOneCountry] = useState({})
    if(oneCountry?.name?.common !== undefined){
        return(
            <div>   
            <CountryInfo country={oneCountry}/>
            <button onClick={()=> setOneCountry({})}> Back</button>
            </div>
        )
    }

    console.log("kakak",oneCountry)
    const handleButton = (countryToShow) => {
        console.log("valittumaa", countryToShow.name.common)
        setOneCountry(countryToShow)
        return <CountryInfo country={countryToShow}/>
        
    }
    if(!countries.length) return
    if(countries.length > 10) return <div>Too many results be more spesific!</div>
    if(countries.length === 1)return <CountryInfo country={countries[0]}/>

    return(
        <ul>
        {countries.map(country =>
            <div>
                <li key={country.name.common}>{country.name.common} <button key={country.name.common} onClick={()=>handleButton(country)}>show</button></li> 
            </div>  
        )}
            
        </ul>
    )
   }

   export default CountryList