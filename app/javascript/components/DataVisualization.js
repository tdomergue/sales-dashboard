import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryView from './SummaryView';
import MonthlyView from './MonthlyView';

const DataVisualization = (props) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageRevenuePerOrder, setAverageRevenuePerOrder] = useState(0);
  const [customersNumber, setCustomersNumber] = useState(0);
  const [revenuePerMonth, setRevenuePerMonth] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/sales/${props.country}`)
    .then( resp => {
      setTotalRevenue(Math.round(resp.data.total_revenue));
      setAverageRevenuePerOrder(Math.round(resp.data.average_revenue_per_order));
      setCustomersNumber(Math.round(resp.data.customers_number));
      setRevenuePerMonth(resp.data.revenue_per_month);
      console.log(resp.data);
    })
    .catch( resp => console.log(resp));
  }, [props.country])

  return (
    <div>
      DataViz for {props.country}
      <SummaryView totalRevenue={totalRevenue} averageRevenuePerOrder={averageRevenuePerOrder} customersNumber={customersNumber} />
      {/* <MonthlyView revenuePerMonth={revenuePerMonth} /> */}
    </div>
  );
}

export default DataVisualization;