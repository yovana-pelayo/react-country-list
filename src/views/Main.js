import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import { client } from '../services/client';
import fetchCountries from '../services/Countries';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setErrorMessage('Ooooopsie! Refresh page please!');
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <p className="error">{errorMessage}</p>
      <div className="main">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </>
  );
}
