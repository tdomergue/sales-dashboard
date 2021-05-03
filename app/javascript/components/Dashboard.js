import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySelect from './CountrySelect';
import DataVisualization from './DataVisualization';

const Dashboard = () => {
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageRevenuePerOrder, setAverageRevenuePerOrder] = useState(0);
  const [customersNumber, setCustomersNumber] = useState(0);
  const [revenuePerMonth, setRevenuePerMonth] = useState({});

  useEffect(() => {
    axios.get('/api/v1/sales')
    .then( resp => {
      setCountries(resp.data.countries);
      setTotalRevenue(Math.round(resp.data.total_revenue));
      setAverageRevenuePerOrder(Math.round(resp.data.average_revenue_per_order));
      setCustomersNumber(Math.round(resp.data.customers_number));
      setRevenuePerMonth(resp.data.revenue_per_month);
    })
    .catch( resp => console.log(resp));
  }, [])

  useEffect(() => {
    axios.get(`/api/v1/sales/${country}`)
    .then( resp => {
      setTotalRevenue(Math.round(resp.data.total_revenue));
      setAverageRevenuePerOrder(Math.round(resp.data.average_revenue_per_order));
      setCustomersNumber(Math.round(resp.data.customers_number));
      setRevenuePerMonth(resp.data.revenue_per_month);
    })
    .catch( resp => console.log(resp));
  }, [country])

  return (
    <div>
      <CountrySelect country={country} setCountry={setCountry} countries={countries} />
      <DataVisualization totalRevenue={totalRevenue} averageRevenuePerOrder={averageRevenuePerOrder} customersNumber={customersNumber} revenuePerMonth={revenuePerMonth} />
    </div>
  );
}

export default Dashboard;