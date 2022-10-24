const CountryInfo = ({country}) =>{


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
        
    </div>
    )
}

export default CountryInfo