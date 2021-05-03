import React, { useState } from 'react';
import CountrySelect from './CountrySelect';
import DataVisualization from './DataVisualization';

const Dashboard = () => {
  const [country, setCountry] = useState("Will dropdown when countries will be loaded...");
  console.log(country);

  return (
    <div>
      <CountrySelect country={country} setCountry={setCountry} />
      <DataVisualization country={country == "Will dropdown when countries will be loaded..." ? '' : country} />
    </div>
  );
}

export default Dashboard;