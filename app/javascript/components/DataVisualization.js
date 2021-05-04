import React from 'react';
import SummaryView from './SummaryView';
import MonthlyView from './MonthlyView';

const DataVisualization = (props) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageRevenuePerOrder, setAverageRevenuePerOrder] = useState(0);
  const [customersNumber, setCustomersNumber] = useState(0);
  const [revenuePerMonth, setRevenuePerMonth] = useState({});

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
      <SummaryView totalRevenue={props.totalRevenue} averageRevenuePerOrder={props.averageRevenuePerOrder} customersNumber={props.customersNumber} />
      <MonthlyView revenuePerMonth={props.revenuePerMonth} />
    </div>
  );
}

export default DataVisualization;