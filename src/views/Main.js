import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import { client } from '../services/client';
import fetchCountries from '../services/Countries';

export default function Main() {
  const [countries, setCountries] = useState([]);
  //   const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      //   console.log(resp);
      setCountries(resp);
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
}
