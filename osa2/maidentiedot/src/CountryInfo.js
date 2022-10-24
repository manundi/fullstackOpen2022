import axios from "axios"
import {useState, useEffect} from "react"

const CountryInfo = ({country}) =>{
    const [temp, setTemp] = useState(0)
    useEffect(() => {
        const baseUrl ='https://api.open-meteo.com/v1/'
        const latitude = country.latlng[0].toFixed(2)
        const longitude = country.latlng[1].toFixed(2)
        const urlparam = 'forecast?latitude=' + latitude + '&longitude=' + longitude + '&hourly=temperature_2m'
        const url = new URL(urlparam,baseUrl);   
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            setTemp(response.data.hourly.temperature_2m[0])
        }).catch(function (error) {
            console.error(error);
        });
    },[])
   

    return(
    <div>
        <h1>{country.name.common}</h1>
        <p>{country.capital[0]}</p>
        <p>area: {country.area}</p>
        <ul>
             {Object.values(country.languages).map(lang =>
                <li key={lang}>{lang}</li>
            )}
        </ul>
        <img src={country.flags.png} alt="flag of the country"/>
        <div>
            Temperature: {temp} C
        </div>    
    </div>
    )
}

export default CountryInfo