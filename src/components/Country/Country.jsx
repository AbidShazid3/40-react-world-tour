import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, area, population, cca3} = country;
    // console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'blue' : 'white'}}>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <hr />
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Visited Flag</button>
            <hr />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;