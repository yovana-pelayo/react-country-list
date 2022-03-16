import React, { useEffect, useState } from 'react';
import { client } from '../services/client';
import fetchCountries from '../services/Countries';

export default function Main() {
  const [country, setCountry = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await client.fetchCountries();
      console.log(resp);
    };
  });
}
