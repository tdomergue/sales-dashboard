import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySelect from './CountrySelect';
import DataVisualization from './DataVisualization';

const Dashboard = () => {
  const [country, setCountry] = useState('Select a country');

  return (
    <div>
      <CountrySelect country={country} setCountry={setCountry} />
      <DataVisualization country={country} />
    </div>
  );
}

export default Dashboard;