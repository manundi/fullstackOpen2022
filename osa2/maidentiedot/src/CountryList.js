const CountryList = (countries) =>{
    console.log("montao maata",countries.countries.length)
    if(!countries.countries.length) return
    if(countries.countries.length > 10) return <div>Too many results be more spesific!</div>
    if(countries.countries.length === 1){
      const oneCountry = countries.countries[0]
        return(
            <div>
                <h1>{oneCountry.name.common}</h1>
                <p>{oneCountry.capital[0]}</p>
                <p>area: {oneCountry.area}</p>
                <ul>

                {Object.values(oneCountry.languages).map(lang =>
                    <li>{lang}</li>
                    )}
                </ul>
                <img src={oneCountry.flags.png} alt="flag of the country"/>
                
            </div>
        )
    } 
    console.log(countries.countries)
    return(
        <ul>
        {countries.countries.map(country =>
            <li key={country.name.common}>{country.name.common}</li>
            )}
        </ul>
        )
   }
   export default CountryList