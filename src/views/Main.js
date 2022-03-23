import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import './Main.css';
import fetchCountries from '../services/Countries';
import Dropdown from '../Components/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setTimeout(() => {
          setLoading(false);
        }, 850);
      } catch (e) {
        setErrorMessage('Ooooopsie DAisys! Refresh page please!');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <Dropdown callback={setContinent} />
      <p className="error">{errorMessage}</p>
      <div className="main">
        {filterCountries().map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </div>
  );
}
// ask tanner for to test error message. When would that occur?

// filterCountries
