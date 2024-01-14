import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>

            {
                countries.map(country =><Country country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;