import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import { client } from '../services/client';
import fetchCountries from '../services/Countries';
// import SelectContinents from '../Components/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  //   const [continents, setContinents] = useState('North America');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setTimeout(() => {
          setLoading(false);
        }, 750);
      } catch (e) {
        setErrorMessage('Ooooopsie! Refresh page please!');
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <>
      <p className="error">{errorMessage}</p>
      <div className="main">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
          //   <SelectContinents key={country.continents} {...country} />
        ))}
      </div>
    </>
  );
}
// ask tanner for to test error message. When would that occur?
