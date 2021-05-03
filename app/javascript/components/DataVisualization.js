import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataVisualization = (props) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageRevenuePerOrder, setAverageRevenuePerOrder] = useState(0);
  const [customersNumber, setCustomersNumber] = useState(0);
  const [revenuePerMonth, setRevenuePerMonth] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/sales/${props.country}`)
    .then( resp => {
      setTotalRevenue(resp.data.totalRevenue);
      setAverageRevenuePerOrder(resp.data.averageRevenuePerOrde);
      setCustomersNumber(resp.data.customersNumber);
      setRevenuePerMonth(resp.data.revenuePerMonth);
      console.log(resp.data);
    })
    .catch( resp => console.log(resp));
  }, [props.country])

  return (
    <div>
      DataViz for {props.country}
    </div>
  );
}

export default DataVisualization;