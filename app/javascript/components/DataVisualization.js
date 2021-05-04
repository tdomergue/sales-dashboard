import React, { useState, useEffect } from 'react';
import SummaryView from './SummaryView';
import MonthlyView from './MonthlyView';
import axios from 'axios';

const DataVisualization = (props) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageRevenuePerOrder, setAverageRevenuePerOrder] = useState(0);
  const [customersNumber, setCustomersNumber] = useState(0);
  const [revenuePerMonth, setRevenuePerMonth] = useState({});

  useEffect(() => {
    axios.get(`/api/v1/customers/${props.country[0][1]}`)
    .then( resp => setCustomersNumber(resp.data.customers) )
    .catch( resp => console.log(resp) );
  }, [props.country])

  useEffect(() => {
    axios.get(`/api/v1/sales/${props.country[0][1]}`)
    .then( resp => {
      setTotalRevenue(Math.round(resp.data.revenue));
    })
    .catch( resp => console.log(resp));
  }, [props.country])

  useEffect(() => {
    axios.get(`/api/v1/orders/${props.country[0][1]}`)
    .then( resp => {
      setAverageRevenuePerOrder(Math.round(resp.data.average_revenue));
    })
    .catch( resp => console.log(resp));
  }, [props.country])

  useEffect(() => {
    axios.get(`/api/v1/sales/${props.country[0][1]}/monthly`)
    .then( resp => {
      setRevenuePerMonth(resp.data.revenue_per_month);
      console.log(revenuePerMonth);
    })
    .catch( resp => console.log(resp));
  }, [props.country])

  return (
    <div>
      <SummaryView totalRevenue={totalRevenue} averageRevenuePerOrder={averageRevenuePerOrder} customersNumber={customersNumber} />
      <MonthlyView revenuePerMonth={revenuePerMonth} />
    </div>
  );
}

export default DataVisualization;