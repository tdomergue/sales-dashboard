import React from 'react';
import SummaryView from './SummaryView';
import MonthlyView from './MonthlyView';

const DataVisualization = (props) => {

  return (
    <div>
      <SummaryView totalRevenue={props.totalRevenue} averageRevenuePerOrder={props.averageRevenuePerOrder} customersNumber={props.customersNumber} />
      <MonthlyView revenuePerMonth={props.revenuePerMonth} />
    </div>
  );
}

export default DataVisualization;