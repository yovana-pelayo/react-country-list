import React from 'react';

export default function CountryCard({ continent, name, iso2 }) {
  return (
    <>
      <div className="country-card">
        <div className="name">{name}</div>
        <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
        <div className="continent">{continent}</div>
      </div>
    </>
  );
}
