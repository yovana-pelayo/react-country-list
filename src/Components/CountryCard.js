import react from 'react';

export default function CountryCard({ continent, name, image }) {
  return (
    <div className="country-card">
      <div className="continent">{continent}</div>
      <div className="name">{name}</div>
      <img src={image} />
    </div>
  );
}
