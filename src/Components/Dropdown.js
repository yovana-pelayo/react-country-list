import React from 'react';

export default function Dropdown({ callback }) {
  return (
    <div className="select-continent">
      <select
        className="continent"
        onChange={(e) => {
          callback(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
}
