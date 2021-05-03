import React, { useState } from 'react';
import CountrySelect from './CountrySelect';

const Dashboard = () => {
  const [country, setCountry] = useState("All");
  console.log(country);

  return (
    <div>
      <CountrySelect country={country} setCountry={setCountry} />
    </div>
  );
}

export default Dashboard;